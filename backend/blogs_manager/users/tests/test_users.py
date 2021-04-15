import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory

from knox.models import AuthToken
from users.models import User, BlogSubscriber
from users.views import UserViewSet, LoginView, RegisterView
from blogs.models import Blog, BlogPost


class TestUsers(TestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.user_one = User.objects.create(username="test", email="test@test.com", password="password123", is_active=True)
        self.blog_one = Blog.objects.create(name="test_blog_one", url="www.blogone.com", author="test_author_one", genre="IT",
                                            language="test_language")
        self.blog_subscriber_one = BlogSubscriber.objects.create(blog=self.blog_one, user=self.user_one)

        self.valid_payload_login = {
            "username": "test2",
            "password": "password123",
        }

        self.valid_payload_register = {
            "username": "test2",
            "email": "test2@test.com",
            "password": "password123",
            "password2": "password123",
        }
                
    def test_get_users(self):
        request =  self.factory.get('/api/users')
        response = UserViewSet.as_view({'get': 'list'})(request)

        assert response.status_code == status.HTTP_200_OK
        assert response.data['count'] == 1
        assert response.data['results'][0]['id'] == 1
        assert response.data['results'][0]['username'] == "test"
        assert response.data['results'][0]['email'] == "test@test.com"


    def test_get_user(self):
        request =  self.factory.get('/api/users/{}'.format(self.user_one.id))
        response = UserViewSet.as_view({'get': 'retrieve'})(request, pk=self.user_one.id)

        assert response.status_code == status.HTTP_200_OK
        assert response.data['id'] == 1
        assert response.data['username'] == "test"
        assert response.data['email'] == "test@test.com"
        assert not response.data['is_superuser']


    def test_post_register(self):
        request =  self.factory.post(
            '/api/register',
            content_type='application/json',
            data=json.dumps(self.valid_payload_register)
        )
        response = RegisterView.as_view()(request)

        assert User.objects.all().count() == 2
        assert response.status_code == status.HTTP_200_OK
        assert response.data['user']['id'] == 2
        assert response.data['user']['username'] == "test2"
        assert response.data['user']['email'] == "test2@test.com"
        assert AuthToken.objects.all().filter(user__username="test2").exists()

    def test_post_login(self):
        request_login =  self.factory.post(
            '/api/register',
            content_type='application/json',
            data=json.dumps(self.valid_payload_register)
        )
        response_login = RegisterView.as_view()(request_login)

        request_register =  self.factory.post(
            '/api/login',
            content_type='application/json',
            data=json.dumps(self.valid_payload_login)
        )
        response_register = LoginView.as_view()(request_register)

        assert User.objects.all().count() == 2
        assert response_register.status_code == status.HTTP_200_OK
        assert response_register.data['user']['id'] == 2
        assert response_register.data['user']['username'] == "test2"
        assert response_register.data['user']['email'] == "test2@test.com"
        assert AuthToken.objects.all().filter(user__username="test2").exists()