import json
import datetime
from pytz import timezone
from django.test import TestCase, Client
from rest_framework import status
from rest_framework.test import APIClient, APIRequestFactory

from blogs.models import Blog, BlogPost
from blogs.serializers import BlogSerializer
from blogs.functions import month_string_to_date


class TestScrapingFunctions(TestCase):
              
    def test_month_string_to_date(self):
        assert month_string_to_date('jan') == 1
        assert month_string_to_date('mar') == 3
        assert month_string_to_date('jun') == 6
        assert month_string_to_date('paź') == 10
        assert month_string_to_date('dec') == 12
        assert month_string_to_date('wrong') == 0


    