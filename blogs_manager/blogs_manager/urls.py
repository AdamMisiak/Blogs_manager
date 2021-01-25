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
    re_path('api-auth/', include('rest_framework.urls')),
    re_path(r'^api/', include(router.urls)),
    re_path("", include("pages.urls")),
    # re_path("blogs/", include("blogs.urls")),
    # re_path("users/", include("users.urls")),
    re_path("admin/", admin.site.urls),
    path(r"test/", include("frontend.urls")),

]
