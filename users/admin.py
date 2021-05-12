from django.contrib import admin
from .models import BlogSubscriber, EmailSetting


class BlogSubscriberAdmin(admin.ModelAdmin):
    list_display = ("id", "blog", "user", "date", "email_notification")
    list_display_links = ("id", "blog")
    list_filter = ("blog", "user")
    search_fields = ("blog", "user")
    list_per_page = 25


class EmailSettingAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "email_frequency")
    list_display_links = ("id", "user")
    list_filter = ("user", "email_frequency")
    search_fields = ("user", )
    list_per_page = 25


admin.site.register(BlogSubscriber, BlogSubscriberAdmin)
admin.site.register(EmailSetting, EmailSettingAdmin)



