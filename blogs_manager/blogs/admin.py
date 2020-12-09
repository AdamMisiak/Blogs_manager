from django.contrib import admin
from .models import Blog, BlogPost, BlogPhoto


class BlogAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "url", "author", "genre", "language")
    list_display_links = ("id", "name")
    list_filter = ("genre", "language")
    search_fields = ("name", "author")
    list_per_page = 25


class BlogPostAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "url", "blog", "added", "opened")
    list_display_links = ("id", "name")
    list_filter = ("added", "blog", "opened")
    search_fields = ("blog", "name")
    list_per_page = 25


class BlogPhotoAdmin(admin.ModelAdmin):
    list_display = ("id", "blog")
    list_display_links = ("id", "blog")
    list_filter = ("blog",)
    search_fields = ("blog",)
    list_per_page = 25


admin.site.register(Blog, BlogAdmin)
admin.site.register(BlogPost, BlogPostAdmin)
admin.site.register(BlogPhoto, BlogPhotoAdmin)
