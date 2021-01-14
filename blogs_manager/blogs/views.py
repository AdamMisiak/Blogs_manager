from django.shortcuts import render
from django.core.paginator import Paginator
from django.contrib import auth, messages
from django.http import HttpResponseRedirect, HttpResponse

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action

from users.models import BlogSubscriber
from .models import Blog, BlogPost
from .serializers import BlogListSerializer, BlogDetailsSerializer, BlogDetailsStatsSerializer


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
        serializer = BlogDetailsStatsSerializer(instance)
        return Response(serializer.data)


    # @action(methods=['get'], detail=False)
    # def subscribed_blogs(self, request):
    #     subscribed_blogs = Blog.objects.filter(subscribed_blog__user=request.user)
    #     serializer = BlogListSerializer(subscribed_blogs, many=True)
    #     return Response(serializer.data)

def index(request):
    blogs = Blog.objects.all()
    page = request.GET.get('page', 1)
    paginator = Paginator(blogs, 5)

    try:
        blogs = paginator.page(page)
    except PageNotAnInteger:
        blogs = paginator.page(1)
    except EmptyPage:
        blogs = paginator.page(paginator.num_pages)

    if request.user.is_authenticated:
        subscribed_blogs = [blog_subscriber.blog.id for blog_subscriber in BlogSubscriber.objects.filter(user=request.user)]
    else:
        subscribed_blogs = []
        
    context = {
               "blogs": blogs,
               "subscribed_blogs": subscribed_blogs
               }

    if request.user.is_authenticated:
        return render(request, "blogs/blogs.html", context)
    else:
        return render(request, "users/login.html")


def subscribed(request):
    if request.method == "GET":
        blog_id = request.GET["blog_id"]
        blog = Blog.objects.get(id=blog_id)
        blog_subscriber, created = BlogSubscriber.objects.get_or_create(
          blog=blog,
          user=request.user,
        )
        if created:
            # messages.success(request, 'You have subscribed {}'.format(blog.name))
            blog_subscriber.save()
        else:
            # messages.success(request, 'You have unsubscribed {}'.format(blog.name))
            blog_subscriber.delete()

        return HttpResponse("success")
    else:
        return HttpResponse("unsuccess")


def blog_info(request, pk):
    blog = Blog.objects.get(id=pk)
    blog_posts = BlogPost.objects.filter(blog=blog).order_by('-added', 'name')
    blog_posts_count = BlogPost.objects.filter(blog=blog).count()
    blog_posts_per_month = avg_number_of_posts_per_month(blog)
    subscribers = BlogSubscriber.objects.filter(blog=blog).count()

    if request.user.is_authenticated:
        subscribed_blogs = [blog_subscriber.blog.id for blog_subscriber in BlogSubscriber.objects.filter(user=request.user)]
    else:
        subscribed_blogs = []
    
    context = {
               "blog": blog,
               "blog_posts": blog_posts,
               "blog_posts_count": blog_posts_count,
               "subscribed_blogs": subscribed_blogs,
               "blog_posts_per_month": blog_posts_per_month,
               "subscribers": subscribers,
               }

    return render(request, "blogs/blog_info.html", context)
