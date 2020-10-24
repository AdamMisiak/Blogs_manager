from django.contrib import admin
from django.conf.urls import url, include

urlpatterns = [
    url("", include("pages.urls")),
    url("blogs/", include("blogs.urls")),
    url("users/", include("users.urls")),
    url("admin/", admin.site.urls),
]
