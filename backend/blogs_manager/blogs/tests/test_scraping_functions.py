import datetime

from django.test import TestCase
from blogs.functions import month_string_to_date, get_info_from_inwestomat


class TestScrapingFunctions(TestCase):
              
    def test_month_string_to_date(self):
        assert month_string_to_date('jan') == 1
        assert month_string_to_date('mar') == 3
        assert month_string_to_date('jun') == 6
        assert month_string_to_date('paź') == 10
        assert month_string_to_date('dec') == 12
        assert month_string_to_date('wrong') == 0

    def test_get_info_from_blog(self):
        scraping_results = get_info_from_inwestomat()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date


    