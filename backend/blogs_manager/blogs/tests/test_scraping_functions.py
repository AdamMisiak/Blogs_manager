import datetime

from django.test import TestCase
from blogs.models import BlogPost, Blog
from blogs.functions import month_string_to_date, get_info_from_inwestomat, get_info_from_niebezpiecznik, \
                            get_info_from_just_geek_it, get_info_from_finanse_bardzo_osobiste
from users.functions import create_new_blog_post


class TestScrapingFunctions(TestCase):

    def setUp(self):
        self.blog_one = Blog.objects.create(name="test_blog_one", url="www.blogone.com", author="test_author_one", genre="IT",
                                            language="test_language")
              
    def test_month_string_to_date(self):
        assert month_string_to_date('jan') == 1
        assert month_string_to_date('feb') == 2
        assert month_string_to_date('mar') == 3
        assert month_string_to_date('apr') == 4
        assert month_string_to_date('may') == 5
        assert month_string_to_date('jun') == 6
        assert month_string_to_date('jul') == 7
        assert month_string_to_date('aug') == 8
        assert month_string_to_date('sep') == 9
        assert month_string_to_date('oct') == 10
        assert month_string_to_date('nov') == 11
        assert month_string_to_date('dec') == 12
        assert month_string_to_date('wrong') == 0

    def test_get_info_from_inwestomat(self):
        scraping_results = get_info_from_inwestomat()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_just_geek_it(self):
        scraping_results = get_info_from_just_geek_it()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_niebezpiecznik(self):
        scraping_results = get_info_from_niebezpiecznik()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_finanse_bardzo_osobiste(self):
        scraping_results = get_info_from_finanse_bardzo_osobiste()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_create_new_blog_post(self):
        assert BlogPost.objects.all().count() == 0

        create_new_blog_post(get_info_from_inwestomat, 'wrong_blog_name')

        assert BlogPost.objects.all().count() == 0

        create_new_blog_post(get_info_from_inwestomat, 'test_blog_one')

        assert BlogPost.objects.all().count() == 1
