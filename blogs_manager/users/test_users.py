import pytest

from django.test import Client, RequestFactory
from django.urls import reverse
from django.contrib.auth.models import User

@pytest.fixture
def create_user():
    client = Client()
    user = User.objects.create_user(username='admin',
                                 email='admin@admin.com',
                                 password='admin')
    return user


class TestUsersViews:
    @pytest.mark.django_db
    def test_account_view_status_code(self, create_user):
        client = Client()
        login = client.login(username="admin", password="admin")
        url = reverse("account")
        response = client.get(url)
        assert response.status_code == 200

    @pytest.mark.django_db
    def test_register_view_status_code(self):
        client = Client()
        login = client.login(username="admin", password="admin")
        url = reverse("register")
        response = client.post(url, {'first_name':'first_name','last_name':'last_name','username':'username','email':'email@email.com','password':'password', 'password2':'password'})
        assert response.status_code == 302
        assert response.url == "/"



