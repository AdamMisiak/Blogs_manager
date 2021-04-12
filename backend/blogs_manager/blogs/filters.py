from django.db.models import Q
from django_filters import FilterSet, CharFilter, NumberFilter

from .models import Blog, BlogPost

class BlogPostFilter(FilterSet):
    name = CharFilter(method='blog_post_and_blog_filter')
    blog_id = NumberFilter(field_name='blog_id')

    class Meta:
        model = BlogPost
        fields = [
            'name',
            'blog_id',
        ]

    def blog_post_and_blog_filter(self, queryset, name, value):
        return BlogPost.objects.filter(
            Q(name__icontains=value) | Q(blog__name__icontains=value) | Q(blog__author__icontains=value) | Q(blog__genre__icontains=value)
        )


class BlogFilter(FilterSet):
    name = CharFilter(field_name='name', lookup_expr='icontains')
    author = CharFilter(field_name='author', lookup_expr='icontains')
    genre = CharFilter(field_name='genre', lookup_expr='icontains')
    language = CharFilter(field_name='language', lookup_expr='icontains')

    class Meta:
        model = Blog
        fields = [
            'name',
            'author',
            'genre',
            'language'
        ]
