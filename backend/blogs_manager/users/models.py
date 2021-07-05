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

FREQUENCY_CHOICES = (
    ("instant", "Instant"),
    ("daily", "Daily"),
    ("weekly", "Weekly"),
    ("none", "None"),
)

class EmailSetting(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='email_setting')
    email_frequency = models.CharField(choices=FREQUENCY_CHOICES, default="none", max_length=100)
