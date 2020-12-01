from django.shortcuts import render
from django.contrib import auth, messages
from django.http import HttpResponseRedirect, HttpResponse

from users.models import BlogSubscriber
from .models import Blog, BlogPost
from .functions import get_info_from_trading_for_a_living


def index(request):
    blogs = Blog.objects.all()
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
        print('gettt')
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

    if request.user.is_authenticated:
        subscribed_blogs = [blog_subscriber.blog.id for blog_subscriber in BlogSubscriber.objects.filter(user=request.user)]
    else:
        subscribed_blogs = []
    
    context = {
               "blog": blog,
               "blog_posts": blog_posts,
               "blog_posts_count": blog_posts_count,
               "subscribed_blogs": subscribed_blogs
               }

    return render(request, "blogs/blog_info.html", context)

