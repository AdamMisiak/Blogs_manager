from django.conf.urls import re_path
from .views import index

urlpatterns = [
    re_path("", index),
 
]
