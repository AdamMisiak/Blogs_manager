from django.urls import path, include
from knox import views as knox_views
from .views import RegisterView, LoginView, UserView, BlogSubscriberView, EmailSettingView

urlpatterns = [
    path('api/auth/register', RegisterView.as_view()),
    path('api/auth/login', LoginView.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name="knox_logout"),
    path('api/auth/user', UserView.as_view()),
    path('api/auth', include('knox.urls')),
    # POST TO SUBSCRIBE BLOG BY USER
    path('api/blog_subscriber', BlogSubscriberView.as_view()),
    # POST TO CHANGE EMAIL NEWSLETTER SETTING
    path('api/email_setting', EmailSettingView.as_view()),
]