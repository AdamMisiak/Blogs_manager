from datetime import date, timedelta

from blogs.functions import *
from blogs.models import Blog, BlogPost
from celery.decorators import periodic_task
from celery.schedules import crontab
from django.core.mail import send_mail

from users.models import BlogSubscriber, User

logger = get_task_logger('scraping_functions')


@periodic_task(run_every=(crontab(minute='*/30')), name="check_new_blog_posts", ignore_result=True)
def check_new_blog_posts():
    create_new_blog_post(get_info_from_trading_for_a_living, 'Trading For a Living')
    create_new_blog_post(get_info_from_pamietnik_gieldowy, 'Pamiętnik Giełdowy')
    create_new_blog_post(get_info_from_inwestomat, 'Inwestomat.eu')
    create_new_blog_post(get_info_from_independent_trader, 'Independent Trader')
    create_new_blog_post(get_info_from_usstocks, 'USStocks')
    create_new_blog_post(get_info_from_system_trader, 'System Trader')
    create_new_blog_post(get_info_from_spekulant, 'Spekulant')
    create_new_blog_post(get_info_from_just_geek_it, 'Just Geek It')
    create_new_blog_post(get_info_from_finanse_bardzo_osobiste, 'Finanse Bardzo Osobiste')
    create_new_blog_post(get_info_from_mmazurek, 'MMazurek.dev')
    create_new_blog_post(get_info_from_jak_oszczedzac_pieniadze, 'Jak Oszczędzać Pieniądze')
    create_new_blog_post(get_info_from_ppbit, 'Problemy Polskiej Branży IT')
    create_new_blog_post(get_info_from_sunscrapers_python, 'Sunscrapers Python')
    create_new_blog_post(get_info_from_sunscrapers_web_development, 'Sunscrapers Web Development')
    create_new_blog_post(get_info_from_niebezpiecznik, 'Niebezpiecznik')
    create_new_blog_post(get_info_from_finax, 'Finax')
    create_new_blog_post(get_info_from_tawcan, 'Tawcan')
    create_new_blog_post(get_info_from_divgro, 'DivGro')
    create_new_blog_post(get_info_from_sky_is_the_limit, 'Sky Is The Limit')
    create_new_blog_post(get_info_from_lynx_broker, 'Lynx Edukacja')
    # create_new_blog_post(get_info_from_itnext, 'Itnext')
    create_new_blog_post(get_info_from_prywatnyinvestor, 'Prywatny INV€$TOR')
    create_new_blog_post(get_info_from_dividends_and_income, 'Dividends and Income')
    # create_new_blog_post(get_info_from_make_life_easier, 'Make Life Easier')
    create_new_blog_post(get_info_from_rewolucja_energetyczna, 'Rewolucja Energetyczna')
    create_new_blog_post(get_info_from_breadcrumbs_collector, 'Breadcrumbs Collector')
    create_new_blog_post(get_info_from_dividend_stocks, 'Dividend Stocks')
    create_new_blog_post(get_info_from_obserwator_gospodarczy, 'Obserwator Gospodarczy')
    create_new_blog_post(get_info_from_inwestuj_dlugoterminowo, 'Inwestuj Długoterminowo')
    create_new_blog_post(get_info_from_mysteryfinanse, 'Mysteryfinanse')
    create_new_blog_post(get_info_from_mlody_milioner, 'Młody Milioner')
    create_new_blog_post(get_info_from_projekt_po_godzinach, 'Projekt Po Godzinach')
    create_new_blog_post(get_info_from_bede_kodzic, 'Będę Kodzić')
    create_new_blog_post(get_info_from_dziennik_tradera, 'Dziennik Tradera')
    create_new_blog_post(get_info_from_subiektywnie_o_finansach, 'Subiektywnie o Finansach')
    create_new_blog_post(get_info_from_michal_stopka, 'Michał Stopka')
    create_new_blog_post(get_info_from_finansowa_tv, 'Finansowa TV')
    create_new_blog_post(get_info_from_the_felder_report, 'The Felder Report')
    create_new_blog_post(get_info_from_apirobot, "Apirobot")
    create_new_blog_post(get_info_from_finansowa_edukacja, "Finansowa Edukacja")


def create_new_blog_post(get_info_function, blog_name):
    try:
        blog_post_info_results = get_info_function()
        blog_post, created = BlogPost.objects.get_or_create(
            name=blog_post_info_results[0],
            url=blog_post_info_results[1],
            date=blog_post_info_results[2],
            blog=Blog.objects.get(name=blog_name),
        )
        if created:
            send_instant_newsletter(blog_post)
        blog_post.save()
    except Exception as e:
        logger.error("Something went wrong in creating new blog post:", e)

def send_instant_newsletter(blog_post):
    blog_subscribers = BlogSubscriber.objects.filter(blog__blog_post=blog_post)
    users = User.objects.filter(
        is_active=True, 
        email_setting__email_frequency="instant", 
        subscribing__in=blog_subscribers)
    for user in users:
        send_mail(
            subject = 'New blog post from {}'.format(blog_post.blog.name),
            message = '{} has just released new blog post: {}'.format(blog_post.blog.name, blog_post.name),
            from_email = 'adammi.adam@gmail.com',
            recipient_list = [user.email,],
            fail_silently = False,
        )
        logger.error("Email to user {} from {} blog has been send".format(user, blog_post.blog.name))

# Greenwich timezone
@periodic_task(run_every=(crontab(minute=0, hour=2)), name="send_daily_newsletter", ignore_result=True)
def send_daily_newsletter():
    today = date.today()
    users = User.objects.filter(
        is_active=True, 
        email_setting__email_frequency="daily")
    blog_posts = BlogPost.objects.filter(
        date__day=today.day - 1,
        date__month=today.month,
        date__year=today.year
    ).order_by('-id')
    for user in users:
        content = 'Daily blog posts report {}-{}-{}:\n'.format(today.day-1, today.month, today.year)
        content_exists = False
        for blog_post in blog_posts:
            user_is_subscribing = BlogSubscriber.objects.filter(blog__blog_post=blog_post, user=user)
            if user_is_subscribing:
                content += "--------------------------------------- \n"
                content += 'BLOG POST: {}\nBLOG: {}\nLINK: {}'.format(blog_post.name.strip(), blog_post.blog, blog_post.url)
                content += " \n"
                content_exists = True
        if content_exists:
            send_mail(
                subject = 'Daily blog posts report {}-{}-{}'.format(today.day-1, today.month, today.year),
                message = content,
                from_email = 'adammi.adam@gmail.com',
                recipient_list = [user.email,],
                fail_silently = False,
            )
        logger.error("Daily blog posts report sent to user {}".format(user))

# Greenwich timezone
@periodic_task(run_every=(crontab(minute=0, hour=2, day_of_week='mon')), name="send_weekly_newsletter", ignore_result=True)
def send_weekly_newsletter():
    today = date.today()
    start_date = today - timedelta(days=7)
    users = User.objects.filter(
        is_active=True, 
        email_setting__email_frequency="weekly")
    blog_posts = BlogPost.objects.filter(
        date__range=[start_date, today]
    ).order_by('-id')
    for user in users:
        content = 'Weekly blog posts report from {}-{}-{} to {}-{}-{}:\n'.format(
            start_date.day, 
            start_date.month, 
            start_date.day, 
            today.day, 
            today.month, 
            today.year
        )
        content_exists = False
        for blog_post in blog_posts:
            user_is_subscribing = BlogSubscriber.objects.filter(blog__blog_post=blog_post, user=user)
            if user_is_subscribing:
                content += "--------------------------------------- \n"
                content += 'BLOG POST: {}\nBLOG: {}\nDATE: {}\nLINK: {}'.format(
                    blog_post.name.strip(), 
                    blog_post.blog, 
                    blog_post.date.strftime('%d-%m-%Y'), 
                    blog_post.url
                )
                content += " \n"
                content_exists = True
        if content_exists:
            send_mail(
                subject = 'Weekly blog posts report from {}-{}-{} to {}-{}-{}:\n'.format(
                    start_date.day, 
                    start_date.month, 
                    start_date.day, 
                    today.day, 
                    today.month, 
                    today.year
                ),
                message = content,
                from_email = 'adammi.adam@gmail.com',
                recipient_list = [user.email,],
                fail_silently = False,
            )
        logger.error("Weekly blog posts report sent to user {}".format(user))

        
