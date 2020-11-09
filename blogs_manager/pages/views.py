from django.shortcuts import render
from blogs.models import Blog, BlogPost


def index(request):
    blog_posts = BlogPost.objects.all().order_by('-added', 'name')


    context = {"blog_posts": blog_posts}

    return render(request, "pages/index.html", context)
