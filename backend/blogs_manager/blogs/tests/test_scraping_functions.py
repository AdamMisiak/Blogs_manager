import datetime

from django.test import TestCase
from blogs.models import BlogPost, Blog
from blogs.functions import *
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

    def test_get_info_from_pamietnik_gieldowy(self):
        scraping_results = get_info_from_pamietnik_gieldowy()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_inwestomat(self):
        scraping_results = get_info_from_inwestomat()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_independent_trader(self):
        scraping_results = get_info_from_independent_trader()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_usstocks(self):
        scraping_results = get_info_from_usstocks()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_system_trader(self):
        scraping_results = get_info_from_system_trader()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_spekulant(self):
        scraping_results = get_info_from_system_trader()

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

    def test_get_info_from_finanse_bardzo_osobiste(self):
        scraping_results = get_info_from_finanse_bardzo_osobiste()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_mmazurek(self):
        scraping_results = get_info_from_mmazurek()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_jak_oszczedzac_pieniadze(self):
        scraping_results = get_info_from_jak_oszczedzac_pieniadze()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_ppbit(self):
        scraping_results = get_info_from_ppbit()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_sunscrapers_web_development(self):
        scraping_results = get_info_from_sunscrapers_web_development()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_sunscrapers_python(self):
        scraping_results = get_info_from_sunscrapers_python()

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

    def test_get_info_from_sky_is_the_limit(self):
        scraping_results = get_info_from_sky_is_the_limit()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_lynx_broker(self):
        scraping_results = get_info_from_lynx_broker()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def test_get_info_from_itnext(self):
        scraping_results = get_info_from_itnext()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def get_info_from_rewolucja_energetyczna(self):
        scraping_results = get_info_from_rewolucja_energetyczna()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def get_info_from_breadcrumbs_collector(self):
        scraping_results = get_info_from_breadcrumbs_collector()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def get_info_from_dividend_stocks(self):
        scraping_results = get_info_from_dividend_stocks()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def get_info_from_obserwator_gospodarczy(self):
        scraping_results = get_info_from_obserwator_gospodarczy()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date
  
    def get_info_from_inwestuj_dlugoterminowo(self):
        scraping_results = get_info_from_inwestuj_dlugoterminowo()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def get_info_from_mysteryfinanse(self):
        scraping_results = get_info_from_mysteryfinanse()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def get_info_from_mlody_milioner(self):
        scraping_results = get_info_from_mlody_milioner()

        assert len(scraping_results) == 3
        assert type(scraping_results[0]) == str
        assert scraping_results[1].startswith('http')
        assert "://" in scraping_results[1]
        assert type(scraping_results[1]) == str
        assert type(scraping_results[2]) == datetime.date

    def get_info_from_projekt_po_godzinach(self):
        scraping_results = get_info_from_projekt_po_godzinach()

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
