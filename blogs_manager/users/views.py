from django.shortcuts import render, redirect
from django.contrib import auth, messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

from blogs.models import Blog, BlogPost
from users.models import BlogSubscriber
from blogs.functions import *

from .functions import create_new_blog_post



@login_required
def account(request):
    blog_posts = BlogPost.objects.filter(blog__subscribed_blog__user=request.user)

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
        print(user, username, password)

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
