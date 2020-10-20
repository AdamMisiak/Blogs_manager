from django.shortcuts import render

from .models import Blog, BlogPost
from .functions import get_info_from_trading_for_a_living

# Create your views here.


def index(request):
    blogs = Blog.objects.all()
    trading_for_a_living = get_info_from_trading_for_a_living()
    blog_post = BlogPost.objects.create(
        name=trading_for_a_living[0],
        url=trading_for_a_living[1],
        added=trading_for_a_living[2],
        blog=Blog.objects.get(name="Trading for a living"),
    )
    blog_post.save()

    context = {"blogs": blogs}
    return render(request, "blogs/blogs.html", context)
