from django.contrib import admin
from django.urls import path
from django.conf.urls import re_path, include

from rest_framework import routers

from blogs.views import BlogViewSet, BlogPostsViewSet
from users.views import UserViewSet, RegisterViewSet

router = routers.DefaultRouter()

router.register(r'register', RegisterViewSet, basename='register')
router.register(r'blogs', BlogViewSet, basename='blogs')
router.register(r'users', UserViewSet, basename='users')
router.register(r'blog_posts', BlogPostsViewSet, basename='blog_posts')

urlpatterns = [
    path("api-auth/", include('rest_framework.urls')),
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("", include("frontend.urls")),
    path("old", include("pages.urls")),
    path("blogs/", include("blogs.urls")),
    path("users/", include("users.urls")),
    


]
