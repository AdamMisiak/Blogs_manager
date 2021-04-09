from rest_framework import viewsets
from rest_framework.response import Response

from blogs_manager.pagination import BlogPostPageNumberPagination, BlogPageNumberPagination
from .models import Blog, BlogPost, BlogPhoto
from .filters import BlogPostFilter
from .serializers import BlogListSerializer, BlogDetailsSerializer, \
                         BlogPostDetailsSerializer, BlogPhotoDetailsSerializer


def avg_number_of_posts_per_month(blog):
    posts_in_month = {}
    blog_posts = BlogPost.objects.filter(blog=blog).order_by('-date', 'name')
    for post in blog_posts:
        if post.date.month in posts_in_month.keys():
            posts_in_month[post.date.month] += 1
        else:
            posts_in_month[post.date.month] = 1
    average = round(blog_posts.count()/len(posts_in_month), 2)
    return average

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by('name', 'author')
    serializer_class = BlogListSerializer
    pagination_class = BlogPageNumberPagination

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = BlogDetailsSerializer(instance)
        return Response(serializer.data)

class BlogPostsViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all().order_by('-date', '-id')
    serializer_class = BlogPostDetailsSerializer
    ordering_fields = ['name', 'date', 'blog__author', 'blog__name']
    ordering = ('-date', '-id')
    filter_class = BlogPostFilter
    search_fields = ('blog_id')
    pagination_class = BlogPostPageNumberPagination

class BlogPhotoViewSet(viewsets.ModelViewSet):
    queryset = BlogPhoto.objects.all()
    serializer_class = BlogPhotoDetailsSerializer

    def retrieve(self, request, pk=None):
        instance = BlogPhoto.objects.get(blog__id=pk)
        serializer = BlogPhotoDetailsSerializer(instance)
        return Response(serializer.data)
