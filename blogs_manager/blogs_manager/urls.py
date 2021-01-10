from django.contrib import admin
from django.conf.urls import re_path, include

urlpatterns = [
    re_path("", include("pages.urls")),
    re_path("blogs/", include("blogs.urls")),
    re_path("users/", include("users.urls")),
    re_path("admin/", admin.site.urls),
    re_path("test", include("frontend.urls")),
]
