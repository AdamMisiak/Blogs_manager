import pytest

from django.test import Client
from django.urls import reverse
from django.contrib.auth.models import User

@pytest.fixture
def login():
    client = Client()
    logged_in = client.login(username="admin", password="admin")
    return logged_in

class TestBlogsViews:
    @pytest.mark.django_db
    def test_index_view_status_code(self, login):
        client = Client()
        url = reverse("index")
        response = client.get(url)
        assert response.status_code == 200

