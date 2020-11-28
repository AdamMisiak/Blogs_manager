from django.contrib.auth.models import User
from django.db import models
from blogs.models import Blog

from datetime import datetime


# Create your models here.
class BlogSubscriber(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='subscribed_blog')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_subscriber')
    date = models.DateTimeField(default=datetime.now, blank=True)
    email_notification = models.BooleanField(default=False)

    def __str__(self):
        return '{} subscribed by {}'.format(self.blog, self.user)