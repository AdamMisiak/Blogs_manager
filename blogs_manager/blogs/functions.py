import requests
import datetime
import logging
from bs4 import BeautifulSoup

from django.http import HttpResponse

from celery.utils.log import get_task_logger

logger = get_task_logger('scraping_functions')


def month_string_to_date(month_string):
    month_string = month_string.strip()
    if month_string[:3].lower() == "sty":
        month_date = 1
    elif month_string[:3].lower() == "lut":
        month_date = 2
    elif month_string[:3].lower() == "mar":
        month_date = 3
    elif month_string[:3].lower() == "kwi":
        month_date = 4
    elif month_string[:3].lower() == "maj":
        month_date = 5
    elif month_string[:3].lower() == "cze":
        month_date = 6
    elif month_string[:3].lower() == "lip":
        month_date = 7
    elif month_string[:3].lower() == "sie":
        month_date = 8
    elif month_string[:3].lower() == "wrz":
        month_date = 9
    elif month_string[:3].lower() == "paź" or month_string[:3].lower() == "paz":
        month_date = 10
    elif month_string[:3].lower() == "lis":
        month_date = 11
    elif month_string[:3].lower() == "gru":
        month_date = 12
    return month_date


def get_info_from_trading_for_a_living():
    try:
        page = requests.get("https://www.tradingforaliving.pl/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = str(
            soup.find("h2", class_="c-post-card__title c-post-card__title--featured").text
        )[1:]
        blog_post_link = soup.find(
            "h2", class_="c-post-card__title c-post-card__title--featured"
        ).find_next("a")["href"]
        blog_post_date = str(
            soup.find(
                "p", class_="c-post-card__special-date c-post-card__special-date--featured"
            ).text
        )
        blog_post_date = blog_post_date[1:].replace(" ", ".")
        blog_post_date = datetime.datetime.strptime(blog_post_date, "%d.%m.%y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_trading_for_a_living")


def get_info_from_pamietnik_gieldowy():
    try:
        page = requests.get("http://www.pamietnikgieldowy.pl/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_posts = soup.find("div", class_="date-outer")
        blog_post_title = (
            blog_posts.find("h3", class_="post-title entry-title")
            .findChildren("a")[0]
            .text
        )
        blog_post_link = soup.find("h3", class_="post-title entry-title").find_next("a")[
            "href"
        ]

        blog_post_year = str(
            blog_posts.find("h2", class_="date-header").findChildren("span")[0].text
        )[-4:]
        
        blog_post_comma_index = str(
            blog_posts.find("h2", class_="date-header").findChildren("span")[0].text
        ).find(",")
        blog_post_month = str(
            month_string_to_date(
                str(
                    blog_posts.find("h2", class_="date-header").findChildren("span")[0].text
                )[blog_post_comma_index + 4 : blog_post_comma_index + 8]
            )
        )
        blog_post_day = str(
            blog_posts.find("h2", class_="date-header").findChildren("span")[0].text
        ).strip()[blog_post_comma_index + 2 : blog_post_comma_index + 4].strip()
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(
            blog_post_date_string, "%d.%m.%Y"
        ).date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_pamietnik_gieldowy")


def get_info_from_inwestomat():
    try:
        page = requests.get("https://inwestomat.eu/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h2", class_="blog-entry-title entry-title").text

        blog_post_link = soup.find("h2", class_="blog-entry-title entry-title").find_next(
            "a"
        )["href"]

        blog_post_date = str(soup.find("li", class_="meta-date").text)
        blog_post_date = blog_post_date[-10:].replace("/", ".")
        blog_post_date = datetime.datetime.strptime(blog_post_date, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_inwestomat")


def get_info_from_independent_trader():
    try:
        page = requests.get("https://independenttrader.pl/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h2", class_="title auto-title-height").find_next("a")["title"]
        
        blog_post_link = "https://independenttrader.pl"+str(soup.find("h2", class_="title auto-title-height").find_next("a")["href"])
        
        blog_post_date = str(soup.find("div", class_="additionalBar").find_next("p").find_next("p").text).strip()
        blog_post_date = datetime.datetime.strptime(blog_post_date, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_independent_trader")


def get_info_from_usstocks():
    try:
        page = requests.get("https://usstocks.pl/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h3", class_="title").find_next("a").text
        
        blog_post_link = soup.find("h3", class_="title").find_next("a")["href"]
    
        blog_post_date = str(soup.find("div", class_="date").text).strip().replace("/", ".")
        blog_post_date = datetime.datetime.strptime(blog_post_date, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_usstocks")


def get_info_from_system_trader():
    try:
        page = requests.get("https://systemtrader.pl/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h1", class_="headline entry-title").find_next("a")["title"]
        
        blog_post_link = soup.find("h1", class_="headline entry-title").find_next("a")["href"]

        blog_post_date = soup.find("i", class_="md-icon-clock").find_next("time").text
        blog_post_date = datetime.datetime.strptime(blog_post_date, "%d.%m.%Y").date()


        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_system_trader")


def get_info_from_spekulant():
    try:
        page = requests.get("http://spekulant.com.pl/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h3", class_="entry-title").find_next("a")["title"]
        
        blog_post_link = soup.find("h3", class_="entry-title").find_next("a")["href"]
        
        blog_post_date = soup.find("div", class_="meta-info").find_next("time").text
        blog_post_year = str(
            soup.find("div", class_="meta-info").find_next("time").text
        )[-4:]
        blog_post_comma_index = str(
            soup.find("div", class_="meta-info").find_next("time").text
        ).find(",")
        blog_post_month = str(month_string_to_date(str(
            soup.find("div", class_="meta-info").find_next("time").text
        )[:3]))

        blog_post_day = str(str(
            soup.find("div", class_="meta-info").find_next("time").text
        )[blog_post_comma_index-2:blog_post_comma_index]).strip()

        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_spekulant")


def get_info_from_just_geek_it():
    try:
        page = requests.get("https://geek.justjoin.it/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h3", class_="title").find_next("a").text
        
        blog_post_link = soup.find("h3", class_="title").find_next("a")["href"]
        
        blog_post_date = str(soup.find("i", class_="tipi-i-calendar").find_next("time")["datetime"])[:10]
        blog_post_date = datetime.datetime.strptime(blog_post_date, "%Y-%m-%d").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_just_geek_it")
        

def get_info_from_finanse_bardzo_osobiste():
    try:
        page = requests.get("https://marciniwuc.com/strona-z-wpisami/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("div", class_="elementor-widget-wrap").find_next("h1").text
        
        blog_post_link = soup.find("div", class_="elementor-widget-wrap").find_next("h1").find_next("a")["href"]
        
        blog_post_date = str(str(soup.find("div", class_="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-b091780").find_next("span").text).strip())
        blog_post_date = datetime.datetime.strptime(blog_post_date, "%d.%m.%Y").date()
        
        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_finanse_bardzo_osobiste")



def get_info_from_mmazurek():
    try:
        page = requests.get("https://mmazurek.dev/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h3", class_="post-title is-size-2").find_next("a").text
        blog_post_link = soup.find("h3", class_="post-title is-size-2").find_next("a")["href"]
        
        blog_post_date = str(soup.find("span", class_="meta-info-el meta-info-date").find_next("time").text)
        blog_post_date = datetime.datetime.strptime(blog_post_date, "%d/%m/%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_mmazurek")


def get_info_from_jak_oszczedzac_pieniadze():
    try:
        page = requests.get("https://jakoszczedzacpieniadze.pl/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h2", class_="entry-title").find_next("a").text
        blog_post_link = soup.find("h2", class_="entry-title").find_next("a")["href"]
        
        blog_post_date = str(soup.find("p", class_="headline_meta").find_next("abbr").text)
        blog_post_year = str(soup.find("p", class_="headline_meta").find_next("abbr").text)[-4:]
        blog_post_month = str(month_string_to_date(str(str(soup.find("p", class_="headline_meta").find_next("abbr").text)[2:6])))
        blog_post_day = (str(soup.find("p", class_="headline_meta").find_next("abbr").text).strip()[:2]).strip()
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_jak_oszczedzac_pieniadze")


def get_info_from_ppbit():
    try:
        page = requests.get("https://ppbit.pl/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("div", class_="read-title").find_next("h4").find_next("a").text
        blog_post_link = soup.find("div", class_="read-title").find_next("h4").find_next("a")["href"]
        blog_post_date = str(soup.find("div", class_="entry-meta").find_next("span").find_next("span").text).strip()
        blog_post_date = datetime.datetime.strptime(blog_post_date, "%Y-%m-%d").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_ppbit")

# result = get_info_from_inwestomat()
# print(result)
# result = get_info_from_pamietnik_gieldowy()
# print(result)
# result = get_info_from_trading_for_a_living()
# print(result)
# result = get_info_from_independent_trader()
# print(result)
# result = get_info_from_usstocks()
# print(result)
# result = get_info_from_system_trader()
# print(result)
# result = get_info_from_spekulant()
# print(result)
# result = get_info_from_just_geek_it()
# print(result)
# result = get_info_from_finanse_bardzo_osobiste()
# print(result)
# result = get_info_from_mmazurek()
# print(result)
# result = get_info_from_jak_oszczedzac_pieniadze()
# print(result)
# result = get_info_from_ppbit()
# print(result)
