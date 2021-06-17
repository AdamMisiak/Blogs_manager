from django.core.management.base import BaseCommand
from django.utils import timezone
from django.core.mail import send_mail

from datetime import date, timedelta

from users.models import User, BlogSubscriber
from blogs.models import BlogPost

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
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
                    subject = 'Daily blog posts report {}-{}-{}'.format(today.day-1, today.month, today.year),
                    message = content,
                    from_email = 'adammi.adam@gmail.com',
                    recipient_list = ['adammisiak3@gmail.com',],
                    fail_silently = False,
                )
            # logger.error("Weekly blog posts report sent to user {}".format(user))

        