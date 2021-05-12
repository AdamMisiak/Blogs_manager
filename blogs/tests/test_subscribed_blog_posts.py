import json
import datetime
from pytz import timezone
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory

from users.models import User, BlogSubscriber
from blogs.models import Blog, BlogPost
from blogs.views import SubscribedBlogPostsViewSet


class TestSubscribedBlogPosts(TestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.user_one = User.objects.create(username="test", email="test@test.com", password="password123", is_active=True)
        self.blog_one = Blog.objects.create(name="test_blog_one", url="www.blogone.com", author="test_author_one", genre="IT",
                                            language="test_language")
        self.blog_two = Blog.objects.create(name="test_blog_two", url="www.blogtwo.com", author="test_author_two", genre="IT",
                                            language="test_language")
        self.blog_subscriber_one = BlogSubscriber.objects.create(blog=self.blog_one, user=self.user_one)
        self.blog_post_one = BlogPost.objects.create(name="test_blog_post_one", url="www.blogpostone.com", blog=self.blog_one, 
                                                     date=datetime.datetime(2020, 10, 10, 10, 10, 10, tzinfo=timezone('Europe/Warsaw')))

                
    def test_get_subscribed_blog_posts(self):
        request =  self.factory.get('/api/subscribed_blog_posts/', {'user_id': 1})
        response = SubscribedBlogPostsViewSet.as_view({'get': 'list'})(request)

        assert response.status_code == status.HTTP_200_OK
        assert response.data['count'] == 1
        assert response.data['results'][0]['id'] == 1
        assert response.data['results'][0]['blog']['name'] == "test_blog_one"
        assert response.data['results'][0]['blog']['url'] == "www.blogone.com"
        assert response.data['results'][0]['blog']['author'] == "test_author_one"
        assert response.data['results'][0]['name'] == "test_blog_post_one"
        assert response.data['results'][0]['url'] == "www.blogpostone.com"

        request =  self.factory.get('/api/subscribed_blog_posts/', {'user_id': 999, 'blog_id': 999})
        response = SubscribedBlogPostsViewSet.as_view({'get': 'list'})(request)

        assert response.status_code == status.HTTP_200_OK
        assert response.data['count'] == 0
        assert response.data['results'] == []

