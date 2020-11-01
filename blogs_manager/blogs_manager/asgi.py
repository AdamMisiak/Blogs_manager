"""
ASGI config for blogs_manager project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

import os
from __future__ import absolute_import
from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "blogs_manager.settings")

application = get_asgi_application()

# This will make sure the app is always imported when
# Django starts so that shared_task will use this app.
from .celery import app as celery_app