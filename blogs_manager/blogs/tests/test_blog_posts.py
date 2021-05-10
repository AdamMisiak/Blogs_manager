import json
import datetime
from pytz import timezone
from django.test import TestCase, Client
from rest_framework import status
from rest_framework.test import APIRequestFactory

from blogs.models import Blog, BlogPost
from blogs.serializers import BlogSerializer
from blogs.views import BlogPostsViewSet


class TestBlogPosts(TestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.blog_one = Blog.objects.create(name="test_blog_one", url="www.blogone.com", author="test_author_one", genre="IT",
                                            language="test_language")
        self.blog_post_one = BlogPost.objects.create(name="test_blog_post_one", url="www.blogpostone.com", blog=self.blog_one, 
                                                     date=datetime.datetime(2020, 10, 10, 10, 10, 10, tzinfo=timezone('Europe/Warsaw')))
                
    def test_get_blog_posts(self):
        request =  self.factory.get('/api/blog_posts')
        response = BlogPostsViewSet.as_view({'get': 'list'})(request)

        assert response.status_code == status.HTTP_200_OK
        assert response.data['count'] == 1
        assert response.data['results'][0]['id'] == 1
        assert response.data['results'][0]['name'] == "test_blog_post_one"

    def test_get_blog_post(self):
        request =  self.factory.get('/api/blog_posts/{}'.format(self.blog_post_one.id))
        response = BlogPostsViewSet.as_view({'get': 'retrieve'})(request, pk=self.blog_post_one.id)

        assert response.status_code == status.HTTP_200_OK
        assert response.data['name'] == "test_blog_post_one"
        assert response.data['url'] == "www.blogpostone.com"
        assert 'test_blog_one' in str(response.data['blog'])

    