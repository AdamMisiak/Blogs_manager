from django.shortcuts import render
from .models import Blog

# Create your views here.

def index(request):
    blogs = Blog.objects.all()
    context = {
        'blogs': blogs
    }
    return render(request, 'blogs/blogs.html', context)
