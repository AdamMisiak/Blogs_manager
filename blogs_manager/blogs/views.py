from django.shortcuts import render

from .models import Blog, BlogPost
from .functions import get_info_from_trading_for_a_living

# Create your views here.


def index(request):
    blogs = Blog.objects.all()
    
    context = {"blogs": blogs}
    return render(request, "blogs/blogs.html", context)


def blog_info(request, pk):
    blog = Blog.objects.get(id=pk)
    blog_posts = BlogPost.objects.filter(blog=blog).order_by('-added', 'name')
    
    context = {
               "blog": blog,
               "blog_posts": blog_posts 
               }
    return render(request, "blogs/blog_info.html", context)

