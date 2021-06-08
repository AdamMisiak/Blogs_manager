from django.contrib import admin
from django.urls import path
from django.conf.urls import re_path, include
from django.views.generic import TemplateView

from rest_framework import routers

from blogs.views import BlogViewSet, BlogPostsViewSet, BlogPhotoViewSet, SubscribedBlogPostsViewSet
from users.views import UserViewSet

router = routers.DefaultRouter()

router.register(r'users', UserViewSet, basename='users')
router.register(r'blogs', BlogViewSet, basename='blogs')
router.register(r'blog_posts', BlogPostsViewSet, basename='blog_posts')
router.register(r'subscribed_blog_posts', SubscribedBlogPostsViewSet, basename='subscribed_blog_posts')
router.register(r'blog_photos', BlogPhotoViewSet, basename='blog_photos')

urlpatterns = [
    path("api-auth/", include('rest_framework.urls')),
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
    path("", include("blogs.urls")),
    path("", include("users.urls")),
    re_path('.*', TemplateView.as_view(template_name='index.html'))
]
