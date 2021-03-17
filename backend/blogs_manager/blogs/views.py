from django.shortcuts import render
from django.core.paginator import Paginator
from django.contrib import auth, messages
from django.http import HttpResponseRedirect, HttpResponse

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action

from users.models import BlogSubscriber
from .models import Blog, BlogPost, BlogPhoto
from .filters import BlogPostFilter
from .serializers import BlogListSerializer, BlogSerializer, BlogDetailsSerializer, \
                         BlogPostDetailsSerializer, BlogPhotoDetailsSerializer


def avg_number_of_posts_per_month(blog):
    posts_in_month = {}
    blog_posts = BlogPost.objects.filter(blog=blog).order_by('-added', 'name')
    for post in blog_posts:
        if post.added.month in posts_in_month.keys():
            posts_in_month[post.added.month] += 1
        else:
            posts_in_month[post.added.month] = 1
    average = round(blog_posts.count()/len(posts_in_month), 2)
    return average


class BlogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogListSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = BlogDetailsSerializer(instance)
        return Response(serializer.data)

class BlogPostsViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all().order_by('-added', 'name')
    serializer_class = BlogPostDetailsSerializer
    filter_class = BlogPostFilter
    search_fields = ('blog_id')



class BlogPhotoViewSet(viewsets.ModelViewSet):
    queryset = BlogPhoto.objects.all()
    serializer_class = BlogPhotoDetailsSerializer

    def retrieve(self, request, pk=None):
        instance = BlogPhoto.objects.get(blog__id=pk)
        serializer = BlogPhotoDetailsSerializer(instance)
        return Response(serializer.data)
