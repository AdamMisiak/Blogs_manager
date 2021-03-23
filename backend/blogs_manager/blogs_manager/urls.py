from django.contrib import admin
from django.urls import path
from django.conf.urls import re_path, include

from rest_framework import routers

from blogs.views import BlogViewSet, BlogPostsViewSet, BlogPhotoViewSet
from users.views import UserViewSet

router = routers.DefaultRouter()

# router.register(r'register', RegisterViewSet, basename='register')
router.register(r'users', UserViewSet, basename='users')

router.register(r'blogs', BlogViewSet, basename='blogs')
router.register(r'blog_posts', BlogPostsViewSet, basename='blog_posts')
router.register(r'blog_photos', BlogPhotoViewSet, basename='blog_photos')

urlpatterns = [
    path("api-auth/", include('rest_framework.urls')),
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    # path("", include("frontend.urls")),
    path("old", include("pages.urls")),
    # path("blogs/", include("blogs.urls")),
    path("", include("users.urls")),
]
