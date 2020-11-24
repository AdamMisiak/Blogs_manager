import pytest

from .models import Blog

from django.test import Client
from django.urls import reverse
from django.contrib.auth.models import User

@pytest.fixture
def create_user():
    client = Client()
    user = User.objects.create_user(username='admin',
                                 email='admin@admin.com',
                                 password='admin')
    return user


@pytest.fixture
def create_blog():
    blog = Blog.objects.create(name="Name", url="url", author="Author", genre="Genre", language="Language")
    return blog

class TestBlogsViews:
    @pytest.mark.django_db
    def test_blogs_view_status_code(self, create_user):
        client = Client()
        url = reverse("blogs")
        response = client.get(url)
        assert response.status_code == 200

    @pytest.mark.django_db
    def test_blog_info_view_status_code(self, create_user, create_blog):
        client = Client()
        url = reverse("blog_info", kwargs={'pk':1})
        response = client.get(url)
        assert response.status_code == 200

    # @pytest.mark.django_db
    # def test_subscribed_view_status_code(self, login, create_blog):
    #     client = Client()
    #     url = reverse("subscribed")
    #     response = client.get(url)
    #     assert response.status_code == 200