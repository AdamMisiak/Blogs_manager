from django.shortcuts import render
from blogs.models import Blog, BlogPost
from users.models import BlogSubscriber


def index(request):
    blog_posts = BlogPost.objects.all().order_by('-added', 'name')
    if request.user.is_authenticated:
        blogs_subscribed = BlogSubscriber.objects.filter(user=request.user)
    else:
        blogs_subscribed = []

    context = {
        "blog_posts": blog_posts,
        "blogs_subscribed": blogs_subscribed
    }

    return render(request, "pages/index.html", context)
