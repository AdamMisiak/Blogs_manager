from blogs.models import Blog, BlogPost
from blogs.functions import *

from celery.schedules import crontab
from celery.decorators import periodic_task


def create_new_blog_post(get_info_function, blog_name):
    blog_post_info_results = get_info_function()
    blog_post, created = BlogPost.objects.get_or_create(
        name=blog_post_info_results[0],
        url=blog_post_info_results[1],
        added=blog_post_info_results[2],
        blog=Blog.objects.get(name=blog_name),
    )
    blog_post.save()

@periodic_task(run_every=(crontab(minute='*/1')), name="check_new_blog_posts", ignore_result=True)
def check_new_blog_posts():
    create_new_blog_post(get_info_from_trading_for_a_living, 'Trading for a living')
    create_new_blog_post(get_info_from_pamietnik_gieldowy, 'Pamiętnik Giełdowy')
    create_new_blog_post(get_info_from_inwestomat, 'Inwestomat.eu')
    create_new_blog_post(get_info_from_independent_trader, 'Independent Trader')
    create_new_blog_post(get_info_from_usstocks, 'USStocks')
    create_new_blog_post(get_info_from_system_trader, 'System Trader')
    create_new_blog_post(get_info_from_spekulant, 'Spekulant')
