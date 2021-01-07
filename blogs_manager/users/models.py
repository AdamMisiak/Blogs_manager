from django.contrib.auth.models import User
from django.db import models
from blogs.models import Blog, BlogPost

from datetime import datetime

class BlogSubscriber(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='subscribed_blog')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_subscriber')
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
    user = models.ForeignKey(User, null=True, blank=True)
    object_id = models.TextField()
    action = models.CharField(max_length=1, choices=ACTIONS)

    @receiver(user_logged_in)
    def user_logged_in(sender, request, user, **kwargs):
        UserLog.create_log(sender, 'login', 'L', user)


