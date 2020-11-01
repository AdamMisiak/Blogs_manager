from django.shortcuts import render, redirect
from django.contrib import auth
from django.contrib.auth.models import User
from blogs.models import Blog, BlogPost
from blogs.functions import *

from .functions import create_new_blog_post

# from celery import Celery
# from celery.schedules import crontab
# from celery.decorators import periodic_task
from celery import shared_task

@shared_task
def sample_task():
    print("The sample task just ran.")
    print(5+5)


def account(request):
    blog_posts = BlogPost.objects.all().order_by('-added', 'name')
    create_new_blog_post(get_info_from_trading_for_a_living, 'Trading for a living')
    create_new_blog_post(get_info_from_pamietnik_gieldowy, 'Pamiętnik Giełdowy')
    create_new_blog_post(get_info_from_inwestomat, 'Inwestomat.eu')
    create_new_blog_post(get_info_from_inwestomat, 'Independent Trader')

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
                print('taki username jest juz')
            else:
                if User.objects.filter(email=email).exists():
                    print('taki mail juz jest')
                else:
                    user = User.objects.create(first_name=first_name, last_name=last_name, username=username,
                                        email=email, password=password)
                    user.save()
                    return redirect('index')
        else:
            print('hasla zle   ')
            return redirect('register')
    return render(request, 'users/register.html')



def login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)

        if user:
            auth.login(request, user)
            # messages.success(request, 'You are now logged in')
            return redirect('index')
        else:
            # messages.error(request, 'Invalid credentials')
            return redirect('login')

    return render(request, 'users/login.html')

def logout(request):
    auth.logout(request)
    # messages.success(request, 'You are now logged out')
    return redirect('index')
