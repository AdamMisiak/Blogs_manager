from django.contrib import admin
from .models import Blog


class BlogAdmin(admin.ModelAdmin):
  list_display = ('id', 'name', 'url', 'author', 'genre', 'language')
  list_display_links = ('id', 'name')
  list_filter = ('genre', 'language')
  search_fields = ('name', 'author')
  list_per_page = 25

admin.site.register(Blog, BlogAdmin)