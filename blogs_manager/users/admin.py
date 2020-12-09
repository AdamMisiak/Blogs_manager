from django.contrib import admin
from .models import BlogSubscriber, BlogPostOpened


class BlogSubscriberAdmin(admin.ModelAdmin):
    list_display = ("id", "blog", "user", "date", "email_notification")
    list_display_links = ("id", "blog")
    list_filter = ("blog", "user")
    search_fields = ("blog", "user")
    list_per_page = 25


class BlogPostOpenedAdmin(admin.ModelAdmin):
    list_display = ("id", "blog_post", "user", "date")
    list_display_links = ("id", "blog_post")
    list_filter = ("blog_post", "user")
    search_fields = ("blog_post", "user")
    list_per_page = 25



admin.site.register(BlogSubscriber, BlogSubscriberAdmin)
admin.site.register(BlogPostOpened, BlogPostOpenedAdmin)

