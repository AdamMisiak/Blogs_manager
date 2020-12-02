from django.urls import path

from . import views

urlpatterns = [
    path("account/", views.account, name="account"),
    path("register/", views.register, name="register"),
    path("login/", views.login, name="login"),
    path("logout/", views.logout, name="logout"),
]