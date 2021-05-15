from __future__ import absolute_import
import os
from celery import Celery
from django.conf import settings

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blogs_manager.settings.settings_prod')
# app = Celery('blogs_manager')
app = Celery('blogs_manager', broker='redis://:pf2b7503729730fb2075fd836cb91ee9ed408996caecb8198b71bcc37decee05d@ec2-99-81-57-235.eu-west-1.compute.amazonaws.com:21550')

# Using a string here means the worker will not have to
# pickle the object when using Windows.
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
