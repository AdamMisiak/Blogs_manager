from __future__ import absolute_import
import os
from celery import Celery
from django.conf import settings

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blogs_manager.settings.settings_prod')
# app = Celery('blogs_manager')
app = Celery('blogs_manager', broker='redis://redistogo:05a9c7e586994e5e0a2a205c04f03e19@soapfish.redistogo.com:11414/')

# Using a string here means the worker will not have to
# pickle the object when using Windows.
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
