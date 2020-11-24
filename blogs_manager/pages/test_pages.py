import pytest

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


class TestPagesViews:
    @pytest.mark.django_db
    def test_index_view_status_code(self, create_user):
        client = Client()
        url = reverse("index")
        response = client.get(url)
        assert response.status_code == 200
