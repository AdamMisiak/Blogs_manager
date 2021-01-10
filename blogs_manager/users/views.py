import datetime

from django.shortcuts import render, redirect
from django.core.paginator import Paginator
from django.contrib import auth, messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

from blogs.models import Blog, BlogPost
from users.models import BlogSubscriber, BlogPostOpened
from blogs.functions import *

from .functions import create_new_blog_post


@login_required
def account(request):
    blog_posts = BlogPost.objects.filter(blog__subscribed_blog__user=request.user)
    page = request.GET.get('page', 1)
    paginator = Paginator(blog_posts, 10)

    try:
        blog_posts = paginator.page(page)
    except PageNotAnInteger:
        blog_posts = paginator.page(1)
    except EmptyPage:
        blog_posts = paginator.page(paginator.num_pages)

    context = {"blog_posts": blog_posts}

    return render(request, 'users/account.html', context)

def register(request):
    if request.method == "POST":
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']

        if password == password2:
            if User.objects.filter(username=username).exists():
                messages.error(request, 'This username is already taken!')
            else:
                if User.objects.filter(email=email).exists():
                    messages.error(request, 'This email is already taken!')
                else:
                    messages.success(request, 'You have been registered!')
                    user = User.objects.create_user(first_name=first_name, last_name=last_name, username=username,
                                        email=email, password=password)
                    user.save()
                    return redirect('index')
        else:
            messages.error(request, 'Passwords do not match!')
            return redirect('register')
    return render(request, 'users/register.html')

def login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)

        if user:
            auth.login(request, user)
            messages.success(request, 'You are now logged in')
            return redirect('index')
        else:
            messages.error(request, 'Invalid username or password!')
            return redirect('login')

    return render(request, 'users/login.html')

@login_required
def logout(request):
    auth.logout(request)
    messages.success(request, 'You are now logged out')
    return redirect('index')

def blog_post_opened(request):
    if request.method == "GET":
        blog_post_id = request.GET["blog_post_id"]
        blog_post = BlogPost.objects.get(id=blog_post_id)
        if request.user:
            created, blog_post_opened = BlogPostOpened.objects.get_or_create(
                blog_post=blog_post,
                user=request.user,
                date=datetime.datetime.now(),
                opened=True
                )

        return HttpResponse("success")
    else:
        return HttpResponse("unsuccess")
