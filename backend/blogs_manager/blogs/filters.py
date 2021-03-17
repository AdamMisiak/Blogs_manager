from django_filters import FilterSet, CharFilter, NumberFilter

from .models import Blog, BlogPost

class BlogPostFilter(FilterSet):
    blog_id = NumberFilter(field_name='blog_id')

    class Meta:
        model = BlogPost
        fields = [
            'blog_id',
        ]
