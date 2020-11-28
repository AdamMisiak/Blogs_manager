from django.shortcuts import render
from blogs.models import Blog, BlogPost
from users.models import BlogSubscriber


def index(request):
    blog_posts = BlogPost.objects.all().order_by('-added', 'name')
    # user = request.user
    # blogs_subscribed = BlogSubscriber.objects.filter(user=user)
    # print(blogs_subscribed)
    # for i in blog_posts:
    #     print(i.blog.subscribed_blog.all().first())



    context = {
        "blog_posts": blog_posts
    }

    return render(request, "pages/index.html", context)
