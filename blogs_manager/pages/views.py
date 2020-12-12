from django.shortcuts import render
from django.core.paginator import Paginator

from blogs.models import Blog, BlogPost
from users.models import BlogSubscriber, BlogPostOpened


def index(request):
    blog_posts = BlogPost.objects.all().order_by('-added', 'name')
    page = request.GET.get('page', 1)
    paginator = Paginator(blog_posts, 10)

    try:
        blog_posts = paginator.page(page)
    except PageNotAnInteger:
        blog_posts = paginator.page(1)
    except EmptyPage:
        useblog_postsrs = paginator.page(paginator.num_pages)
        
    if request.user.is_authenticated:
        subscribed_blogs = [blog_subscriber.blog.id for blog_subscriber in BlogSubscriber.objects.filter(user=request.user)]
        opened_blog_posts = [blog_post_opened.blog_post.id for blog_post_opened in BlogPostOpened.objects.filter(user=request.user)]
    else:
        subscribed_blogs = []
        opened_blog_posts = []

    context = {
        "blog_posts": blog_posts,
        "subscribed_blogs": subscribed_blogs,
        "opened_blog_posts": opened_blog_posts
    }

    return render(request, "pages/index.html", context)
