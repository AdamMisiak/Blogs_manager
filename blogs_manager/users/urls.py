from django.urls import path

from . import views

urlpatterns = [
    path("account/", views.account, name="account"),
    path("register/", views.register, name="register"),
    path("login/", views.login, name="login"),
    path("logout/", views.logout, name="logout"),
    path("blog_post_opened/", views.blog_post_opened, name="blog_post_opened")
]