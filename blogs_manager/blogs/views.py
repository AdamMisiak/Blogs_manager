from django.shortcuts import render

from .models import Blog, BlogPost
from .functions import get_info_from_trading_for_a_living

# Create your views here.


def index(request):
    blogs = Blog.objects.all()
    


    context = {"blogs": blogs}
    return render(request, "blogs/blogs.html", context)
