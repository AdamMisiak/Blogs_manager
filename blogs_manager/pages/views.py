from django.shortcuts import render
from blogs.models import Blog, BlogPost
from users.models import BlogSubscriber


def index(request):
    blog_posts = BlogPost.objects.all().order_by('-added', 'name')
    if request.user.is_authenticated:
        subscribed_blogs = [blog_subscriber.blog.id for blog_subscriber in BlogSubscriber.objects.filter(user=request.user)]
    else:
        subscribed_blogs = []

    context = {
        "blog_posts": blog_posts,
        "subscribed_blogs": subscribed_blogs
    }

    return render(request, "pages/index.html", context)
