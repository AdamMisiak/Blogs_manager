from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('blogs', index),
    path('account', index),
 
]
