from blogs.models import Blog, BlogPost
from blogs.functions import *

from celery.schedules import crontab
from celery.decorators import periodic_task

logger = get_task_logger('scraping_functions')

def create_new_blog_post(get_info_function, blog_name):
    try:
        blog_post_info_results = get_info_function()
        blog_post, created = BlogPost.objects.get_or_create(
            name=blog_post_info_results[0],
            url=blog_post_info_results[1],
            date=blog_post_info_results[2],
            blog=Blog.objects.get(name=blog_name),
        )
        blog_post.save()
    except:
        logger.error("Something went wrong in creating new blog post")

@periodic_task(run_every=(crontab(minute='*/30')), name="check_new_blog_posts", ignore_result=True)
def check_new_blog_posts():
    create_new_blog_post(get_info_from_trading_for_a_living, 'Trading for a living')
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
    create_new_blog_post(get_info_from_sky_is_the_limit, 'Lynx Edukacja')
    
