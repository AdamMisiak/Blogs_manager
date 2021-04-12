import datetime
from pytz import timezone
from django.test import TestCase, Client
from django.urls import reverse
from mixer.backend.django import mixer
from rest_framework import status
from rest_framework.test import APIClient, APIRequestFactory

from blogs.models import Blog, BlogPost
from blogs.views import BlogViewSet


class TestBlogs(TestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.blog_one = Blog.objects.create(name="test_blog_one", url="www.blogone.com", author="test_author_one", genre="test_genre",
                                            language="test_language")
        self.blog_post_one = BlogPost.objects.create(name="test_blog_post_one", url="www.blogpostone.com", blog=self.blog_one, 
                                                     date=datetime.datetime(2020, 10, 10, 10, 10, 10, tzinfo=timezone('Europe/Warsaw')))
                
    def test_get_blogs(self):
        request =  self.factory.get('/api/blogs')
        response = BlogViewSet.as_view({'get': 'list'})(request)

        assert response.status_code == status.HTTP_200_OK
        assert response.data['count'] == 1
        assert response.data['results'][0]['id'] == 1
        assert response.data['results'][0]['name'] == "test_blog_one"
        assert response.data['results'][0]['last_post_added'] == self.blog_post_one.date
