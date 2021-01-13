from datetime import datetime

from django.contrib.auth.models import User
from django.contrib.auth.signals import user_logged_in
from django.db import models
from django.db.models import Q
from django.dispatch import receiver

from blogs.models import Blog, BlogPost

class BlogSubscriber(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='subscribed_by')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='subscribing')
    date = models.DateTimeField(default=datetime.now, blank=True)
    email_notification = models.BooleanField(default=False)

    def __str__(self):
        return '{} subscribed by {}'.format(self.blog, self.user)


class BlogPostOpened(models.Model):
    blog_post = models.ForeignKey(BlogPost, on_delete=models.CASCADE, related_name='opened')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_post_opened')
    date = models.DateTimeField(blank=True)
    opened = models.BooleanField(default=False)


ACTIONS = (
    ('C', 'Create'),
    ('U', 'Update'),
    ('D', 'Delete'),
    ('L', 'Logged in'),
    ('O', 'Logged out')
)

class UserLog(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    object_id = models.TextField()
    action = models.CharField(max_length=1, choices=ACTIONS)

    @receiver(user_logged_in)
    def user_logged_in(sender, request, user, **kwargs):
        UserLog.objects.create(user=request.user,
                object_id='login'.__str__(),
                action='L')
        # Counting new blog post since last logging
        if UserLog.objects.exists():
            subscribed_blogs = Blog.objects.filter(subscribed_blog__user=request.user)
            last_logging_date = UserLog.objects.filter(user=request.user).order_by('-created').first().created
            new_blog_posts = BlogPost.objects.filter(blog__in=subscribed_blogs, added__gte=last_logging_date).count()


 


