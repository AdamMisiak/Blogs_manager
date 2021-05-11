
from django.core.management import BaseCommand
from django.utils import timezone

from users.functions import send_instant_newsletter
from users.models import BlogPost



class Command(BaseCommand):
    def handle(self, *args, **options):
        blog_post = BlogPost.objects.get(id=543)
        print(blog_post, blog_post.blog, blog_post.url)
        send_instant_newsletter(blog_post)
