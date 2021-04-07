from django_filters import FilterSet, CharFilter, NumberFilter

from .models import Blog, BlogPost

class BlogPostFilter(FilterSet):
    name = CharFilter(field_name='name', lookup_expr='icontains')
    blog_id = NumberFilter(field_name='blog_id')

    class Meta:
        model = BlogPost
        fields = [
            'name',
            'blog_id',
        ]
