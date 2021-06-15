from django.core.management.base import BaseCommand
from django.utils import timezone
from django.core.mail import send_mail

from datetime import date

from users.models import User, BlogSubscriber
from blogs.models import BlogPost

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
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
                    subject = 'Blog posts report {}-{}-{}'.format(today.day-1, today.month, today.year),
                    message = content,
                    from_email = 'adammi.adam@gmail.com',
                    recipient_list = ['adammisiak3@gmail.com',],
                    fail_silently = False,
                )
            # logger.error("Email to user {} from {} blog has been send".format(user, blog_post.blog.name))