from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="blogs"),
    path("<int:pk>/", views.blog_info, name="blog_info"),
    path("subscribed/", views.subscribed, name="subscribed"),
]
