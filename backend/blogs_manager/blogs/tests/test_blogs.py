import json
import datetime
from pytz import timezone
from django.test import TestCase, Client
from rest_framework import status
from rest_framework.test import APIClient, APIRequestFactory

from blogs.models import Blog, BlogPost
from blogs.views import BlogViewSet


class TestBlogs(TestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.blog_one = Blog.objects.create(name="test_blog_one", url="www.blogone.com", author="test_author_one", genre="IT",
                                            language="test_language")
        self.blog_post_one = BlogPost.objects.create(name="test_blog_post_one", url="www.blogpostone.com", blog=self.blog_one, 
                                                     date=datetime.datetime(2020, 10, 10, 10, 10, 10, tzinfo=timezone('Europe/Warsaw')))

        self.valid_payload = {
            'name': 'test_blog_two',
            'url': "www.blogtwo.com",
            'author': "test_author_two",
            'genre': "IT",
            'language': "test_language"
        }
        self.invalid_payload = {
            'name': "",
            'url': "www.blogtwo.com",
            'author': "very_long_string_very_long_string_very_long_string_very_long_string_very_long_string_very_long_string_very_long_string",
            'genre': "invalid_genre",
            'language': 1
        }
                
    def test_get_blogs(self):
        request =  self.factory.get('/api/blogs')
        response = BlogViewSet.as_view({'get': 'list'})(request)

        assert response.status_code == status.HTTP_200_OK
        assert response.data['count'] == 1
        assert response.data['results'][0]['id'] == 1
        assert response.data['results'][0]['name'] == "test_blog_one"
        assert response.data['results'][0]['last_post_added'] == self.blog_post_one.date

    def test_get_blog(self):
        request =  self.factory.get('/api/blogs/{}'.format(self.blog_one.id))
        response = BlogViewSet.as_view({'get': 'retrieve'})(request, pk=self.blog_one.id)

        assert response.status_code == status.HTTP_200_OK
        assert response.data['name'] == "test_blog_one"
        assert response.data['blog_posts'] == BlogPost.objects.filter(blog=self.blog_one).count()
        assert response.data['last_post_added'] == self.blog_post_one.date
        assert response.data['subscribers'] == 0
        assert response.data['blog_post_avg'] == 1.0

    def test_post_blog(self):
        request =  self.factory.post(
            '/api/blogs',
            content_type='application/json',
            data=json.dumps(self.valid_payload)
        )
        response = BlogViewSet.as_view({'post': 'create'})(request)

        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['id'] == 2
        assert response.data['name'] == "test_blog_two"
        assert response.data['last_post_added'] == None

        request =  self.factory.post(
            '/api/blogs',
            content_type='application/json',
            data=json.dumps(self.invalid_payload)
        )
        response = BlogViewSet.as_view({'post': 'create'})(request)

        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert response.data['name'][0] == 'This field may not be blank.'
        assert response.data['author'][0] == 'Ensure this field has no more than 100 characters.'
        assert response.data['genre'][0] == '"invalid_genre" is not a valid choice.'
