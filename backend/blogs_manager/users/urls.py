from django.urls import path, include
from knox import views as knox_views
from .views import RegisterView, LoginView, UserView

urlpatterns = [
    path('api/auth/register', RegisterView.as_view()),
    path('api/auth/login', LoginView.as_view()),
    path('api/auth/user', UserView.as_view()),
    path('api/auth', include('knox.urls')),
    # path("account/", views.account, name="account"),
    # path("register/", views.register, name="register"),
    # path("login/", views.login, name="login"),
    # path("logout/", views.logout, name="logout"),
    # path("blog_post_opened/", views.blog_post_opened, name="blog_post_opened")
]