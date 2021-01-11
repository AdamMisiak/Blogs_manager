from django.contrib import admin
from django.conf.urls import re_path, include

from rest_framework import routers

from blogs.views import BlogViewSet

router = routers.DefaultRouter()
router.register(r'blogs', BlogViewSet, basename='blogs')

urlpatterns = [
    re_path('api-auth/', include('rest_framework.urls')),
    re_path(r'^api/', include(router.urls)),
    re_path("", include("pages.urls")),
    # re_path("blogs/", include("blogs.urls")),
    re_path("users/", include("users.urls")),
    re_path("admin/", admin.site.urls),
    re_path("test", include("frontend.urls")),

]
