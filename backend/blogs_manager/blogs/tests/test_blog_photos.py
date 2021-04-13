import datetime
from pytz import timezone

from django.test import TestCase, Client
from rest_framework import status
from rest_framework.test import APIRequestFactory

from blogs.models import Blog, BlogPost, BlogPhoto
from blogs.serializers import BlogSerializer
from blogs.views import BlogPhotoViewSet


class TestBlogPhotos(TestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.blog_one = Blog.objects.create(name="test_blog_one", url="www.blogone.com", author="test_author_one", genre="IT",
                                            language="test_language")
        self.blog_post_one = BlogPost.objects.create(name="test_blog_post_one", url="www.blogpostone.com", blog=self.blog_one, 
                                                     date=datetime.datetime(2020, 10, 10, 10, 10, 10, tzinfo=timezone('Europe/Warsaw')))
        self.blog_photo_one = BlogPhoto.objects.create(photo="test_blog_photo_one.jpg", blog=self.blog_one)
                
    def test_get_blog_photos(self):
        request =  self.factory.get('/api/blog_photos')
        response = BlogPhotoViewSet.as_view({'get': 'list'})(request)

        assert response.status_code == status.HTTP_200_OK
        assert response.data[0]['id'] == 1
        assert response.data[0]['photo'] == "http://testserver/test_blog_photo_one.jpg"

    def test_get_blog_photo(self):
        request =  self.factory.get('/api/blog_photos/{}'.format(self.blog_photo_one.id))
        response = BlogPhotoViewSet.as_view({'get': 'retrieve'})(request, pk=self.blog_photo_one.id)

        assert response.status_code == status.HTTP_200_OK
        assert response.data['id'] == 1
        assert response.data['photo'] == "/test_blog_photo_one.jpg"

    