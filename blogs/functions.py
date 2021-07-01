import requests
import datetime
from bs4 import BeautifulSoup

from celery.utils.log import get_task_logger

logger = get_task_logger('scraping_functions')


def month_string_to_date(month_string):
    month_string = month_string.strip()
    if month_string[:3].lower() == "sty" or month_string[:3].lower() == "jan":
        month_date = 1
    elif month_string[:3].lower() == "lut" or month_string[:3].lower() == "feb":
        month_date = 2
    elif month_string[:3].lower() == "mar":
        month_date = 3
    elif month_string[:3].lower() == "kwi" or month_string[:3].lower() == "apr":
        month_date = 4
    elif month_string[:3].lower() == "maj" or month_string[:3].lower() == "may":
        month_date = 5
    elif month_string[:3].lower() == "cze" or month_string[:3].lower() == "jun":
        month_date = 6
    elif month_string[:3].lower() == "lip" or month_string[:3].lower() == "jul":
        month_date = 7
    elif month_string[:3].lower() == "sie" or month_string[:3].lower() == "aug":
        month_date = 8
    elif month_string[:3].lower() == "wrz" or month_string[:3].lower() == "sep":
        month_date = 9
    elif month_string[:3].lower() == "paź" or month_string[:3].lower() == "paz" or month_string[:3].lower() == "oct":
        month_date = 10
    elif month_string[:3].lower() == "lis" or month_string[:3].lower() == "nov":
        month_date = 11
    elif month_string[:3].lower() == "gru" or month_string[:3].lower() == "dec":
        month_date = 12
    else:
        month_date = 0
    return month_date


def get_info_from_trading_for_a_living():
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
        }
        page = requests.get("https://www.tradingforaliving.pl/", headers=headers)
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []
        blog_post_title = str(
            soup.find("div", class_="c-post-card__title c-post-card__title--featured").text
        )[1:]
        blog_post_link = soup.find(
            "div", class_="c-post-card__title c-post-card__title--featured"
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


def get_info_from_sunscrapers_python():
    try:
        page = requests.get("https://sunscrapers.com/blog/category/python/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h2", class_="post-item-title").find_next("a").text
        blog_post_link = soup.find("h2", class_="post-item-title").find_next("a")["href"]

        blog_post_date = str(soup.find("li", class_="post-item__date").text).strip()
        blog_post_month = str(month_string_to_date(blog_post_date[:3]))
        blog_post_year = str(blog_post_date[-4:])
        blog_post_day = "1"
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_sunscrapers_python")


def get_info_from_sunscrapers_web_development():
    try:
        page = requests.get("https://sunscrapers.com/blog/category/web-development/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h2", class_="post-item-title").find_next("a").text
        blog_post_link = soup.find("h2", class_="post-item-title").find_next("a")["href"]

        blog_post_date = str(soup.find("li", class_="post-item__date").text).strip()
        blog_post_month = str(month_string_to_date(blog_post_date[:3]))
        blog_post_year = str(blog_post_date[-4:])
        blog_post_day = "1"
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_sunscrapers_web_development")


def get_info_from_niebezpiecznik():
    try:
        page = requests.get("https://niebezpiecznik.pl/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("div", class_="title").find_next("h2").find_next("a")["title"]
        blog_post_link = soup.find("div", class_="title").find_next("h2").find_next("a")["href"]
        try:
            blog_post_date = str(soup.find("div", class_="date").text)[-11:].strip()
            blog_post_date = datetime.datetime.strptime(blog_post_date, "%d.%m.%Y").date()
        except:
            blog_post_date = str(soup.find("div", class_="date").text)[-9:].strip()
            blog_post_date = datetime.datetime.strptime(blog_post_date, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_niebezpiecznik")


def get_info_from_finax():
    try:
        page = requests.get("https://www.finax.eu/pl/blog")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = str(soup.find("h4", class_="article-title").find_next("a").text).strip()
        blog_post_link = soup.find("h4", class_="article-title").find_next("a")["href"]
        
        blog_post_comma_index = str(soup.find("div", class_="col-auto text-right text-muted").text).strip().find(".")
        blog_post_day = str(soup.find("div", class_="col-auto text-right text-muted").text).strip()[:int(blog_post_comma_index)]
        blog_post_month = str(month_string_to_date(str(soup.find("div", class_="col-auto text-right text-muted").text).strip()[3:7].strip()))
        blog_post_year = str(soup.find("div", class_="col-auto text-right text-muted").text).strip()[-4:]

        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_finax")


def get_info_from_tawcan():
    try:
        page = requests.get("https://www.tawcan.com/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h2", class_="entry-title").find_next("a").text
        blog_post_link = soup.find("h2", class_="entry-title").find_next("a")["href"]
        
        blog_post_comma_index = str(soup.find("time", class_="entry-date published").text).find(",")
        blog_post_day = str(str(soup.find("time", class_="entry-date published").text)[int(blog_post_comma_index)-2:int(blog_post_comma_index)]).strip()
        blog_post_month = str(month_string_to_date(str(soup.find("time", class_="entry-date published").text)[:3]))
        blog_post_year = str(soup.find("time", class_="entry-date published").text)[-4:]
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_finax")

def get_info_from_divgro():
    try:
        page = requests.get("https://divgro.blogspot.com/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = str(soup.find("h3", class_="post-title entry-title").find_next("a").text).strip()
        blog_post_link = soup.find("h3", class_="post-title entry-title").find_next("a")["href"]

        blog_post_comma_index = str(soup.find("h2", class_="date-header").find_next("span").text).strip().find(',')
        blog_post_second_comma_index = str(soup.find("h2", class_="date-header").find_next("span").text).strip().find(',',blog_post_comma_index+1)
        blog_post_day = str(str(soup.find("h2", class_="date-header").find_next("span").text).strip()[blog_post_second_comma_index-2:blog_post_second_comma_index]).strip()
        blog_post_month = str(month_string_to_date(str(str(soup.find("h2", class_="date-header").find_next("span").text).strip()[blog_post_comma_index+1:blog_post_comma_index+5]).strip()))
        blog_post_year = str(soup.find("h2", class_="date-header").find_next("span").text).strip()[-4:]

        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_divgro")


def get_info_from_sky_is_the_limit():
    try:
        page = requests.get("https://jakoszczedzacnagieldzie.pl/blog/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = str(soup.find("h4", class_="elementor-post__title").find_next("a").text).strip()
        blog_post_link = soup.find("h4", class_="elementor-post__title").find_next("a")['href']
        
        blog_post_day = str(str(soup.find("div", class_="elementor-post__meta-data").find_next("span").text).strip()[:2]).strip()
        try:
            blog_post_month = str(month_string_to_date(str(str(soup.find("div", class_="elementor-post__meta-data").find_next("span").text).strip()[2:5]).strip()))
            if blog_post_month == '0':
                blog_post_month = str(month_string_to_date(str(str(soup.find("div", class_="elementor-post__meta-data").find_next("span").text).strip()[2:6]).strip()))
        except:
            pass
        blog_post_year = str(str(soup.find("div", class_="elementor-post__meta-data").find_next("span").text).strip()[-4:]).strip()

        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_sky_is_the_limit")


def get_info_from_lynx_broker():
    try:
        page = requests.get("https://www.lynxbroker.pl/edukacja/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = str(soup.find("h3", class_="head5 u-remove-mb").find_next("strong").text)
        blog_post_link = soup.find("h3", class_="head5 u-remove-mb").find_next("strong").find_next("a")["href"]
        
        blog_post_comma_index = str(soup.find("div", class_="post-meta small").find_next("span").text).find('.')
        blog_post_day = str(str(soup.find("div", class_="post-meta small").find_next("span").text).strip())[:2]
        blog_post_month = str(month_string_to_date(str(str(soup.find("div", class_="post-meta small").find_next("span").text).strip())[blog_post_comma_index+2:blog_post_comma_index+5]))
        blog_post_year = str(str(soup.find("div", class_="post-meta small").find_next("span").text).strip())[-4:]

        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_lynx_broker")


def get_info_from_itnext():
    try:
        page = requests.get("https://itnext.io/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = str(soup.find("h3", class_="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32").find_next("div").text)
        blog_post_link = soup.find("div", class_="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30").find_next("a")["href"]

        blog_post_day = str(str(soup.find("div", class_="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental").find_next("time").text)[-2:].strip())
        blog_post_month = str(month_string_to_date(str(str(soup.find("div", class_="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental").find_next("time").text)[:3].strip())))
        blog_post_year = str(datetime.datetime.now().year)
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_itnext")


def get_info_from_prywatnyinvestor():
    try:
        page = requests.get("http://www.prywatnyinvestor.com/")
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = str(soup.find("h1", class_="entry-title").find_next("a").text)
        blog_post_link = soup.find("h1", class_="entry-title").find_next("a")['href']

        blog_post_day = str(soup.find("div", class_="entry-meta").find_next("div").text).strip()[:2]
        try:
            blog_post_month = str(month_string_to_date(str(soup.find("div", class_="entry-meta").find_next("div").text).strip()[3:6]))
            if blog_post_month == '0':
                blog_post_month = str(month_string_to_date(str(soup.find("div", class_="entry-meta").find_next("div").text).strip()[2:5]))
        except:
            pass
        blog_post_day = str(soup.find("div", class_="entry-meta").find_next("div").text).strip()[:2]
        blog_post_year = str(soup.find("div", class_="entry-meta").find_next("div").text).strip()[-4:]

        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_prywatnyinvestor")


def get_info_from_dividends_and_income():
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
        }
        page = requests.get("https://dividendsandincome.com/", headers=headers)
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h2", class_="entry-title").find_next('a').text
        blog_post_link = soup.find("h2", class_="entry-title").find_next('a')['href']

        blog_post_comma_index = str(soup.find("time", class_="published updated").text).find(',')
        blog_post_day = str(soup.find("time", class_="published updated").text)[blog_post_comma_index-2:blog_post_comma_index]
        blog_post_month = str(month_string_to_date(str(soup.find("time", class_="published updated").text)[:3]))
        blog_post_year = str(soup.find("time", class_="published updated").text)[-4:]
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_dividends_and_income")


def get_info_from_make_life_easier():
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
        }
        page = requests.get("https://makelifeeasier.pl/", headers=headers)
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h2", class_="post-title").find_next('a').text
        blog_post_link = soup.find("h2", class_="post-title").find_next('a')['href']
        
        blog_post_comma_index = int(str(soup.find("p", class_="post-author").text).find('@'))
        blog_post_day = str(soup.find("p", class_="post-author").text)[:2].strip()
        blog_post_month = str(month_string_to_date(str(soup.find("p", class_="post-author").text[2:6]).strip()))
        if blog_post_month == 0:
            blog_post_month = str(month_string_to_date(str(soup.find("p", class_="post-author").text[1:5]).strip()))
        blog_post_year = (str(soup.find("p", class_="post-author").text)[blog_post_comma_index-5:blog_post_comma_index]).strip()
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_make_life_easier")


def get_info_from_rewolucja_energetyczna():
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
        }
        page = requests.get("https://rewolucjaenergetyczna.wordpress.com/", headers=headers)
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("div", class_="column column-content posts").find_next('div').find_next('h2').find_next('a').text
        blog_post_link = soup.find("div", class_="column column-content posts").find_next('div').find_next('h2').find_next('a')['href']
        
        blog_post_day = soup.find("div", class_="column column-content posts").find_next('div').find_next('p').find_next('a').text[:2]
        blog_post_month = str(month_string_to_date(soup.find("div", class_="column column-content posts").find_next('div').find_next('p').find_next('a').text[2:6].strip()))
        if blog_post_month == 0:
            blog_post_month = str(month_string_to_date(soup.find("div", class_="column column-content posts").find_next('div').find_next('p').find_next('a').text[1:5].strip()))
        blog_post_year = str(soup.find("div", class_="column column-content posts").find_next('div').find_next('p').find_next('a').text[-10:-5].strip())
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_rewolucja_energetyczna")


def get_info_from_breadcrumbs_collector():
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
        }
        page = requests.get("https://breadcrumbscollector.tech/", headers=headers)
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h2", class_="entry-title").find_next('a').text
        blog_post_link = soup.find("h2", class_="entry-title").find_next('a')['href']
        
        blog_post_comma_index = int(str(soup.find("span", class_="posted-on").find_next('a').find_next('time').text).find(','))
        blog_post_day = soup.find("span", class_="posted-on").find_next('a').find_next('time').text[blog_post_comma_index-2:blog_post_comma_index].strip()
        blog_post_month = str(month_string_to_date(soup.find("span", class_="posted-on").find_next('a').find_next('time').text[:3]))
        blog_post_year = str(soup.find("span", class_="posted-on").find_next('a').find_next('time').text[-4:].strip())
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_breadcrumbs_collector")


def get_info_from_dividend_stocks():
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
        }
        page = requests.get("https://dividendstocks.cash/blog/", headers=headers)
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h2", class_="entry-title").find_next('a').text
        blog_post_link = soup.find("h2", class_="entry-title").find_next('a')['href']

        blog_post_comma_index = int(str(soup.find("span", class_="post-date updated").text).find(','))
        blog_post_day = soup.find("span", class_="post-date updated").text[blog_post_comma_index-2:blog_post_comma_index].strip()
        blog_post_month = str(month_string_to_date(soup.find("span", class_="post-date updated").text[:3]))
        blog_post_year = str(soup.find("span", class_="post-date updated").text[-4:].strip())
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_dividend_stocks")


def get_info_from_obserwator_gospodarczy():
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
        }
        page = requests.get("https://obserwatorgospodarczy.pl/", headers=headers)
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h4", class_="mod-articles-category-title").find_next('a').text
        blog_post_link = 'https://obserwatorgospodarczy.pl'+str(soup.find("h4", class_="mod-articles-category-title").find_next('a')['href'])
        blog_post_date = datetime.datetime.strptime(soup.find("dl", class_="article-info muted").find_next('dd').find_next('dd').text.strip(), "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_obserwator_gospodarczy")


def get_info_from_inwestuj_dlugoterminowo():
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
        }
        page = requests.get("https://inwestujdlugoterminowo.pl/", headers=headers)
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h1", class_="headline entry-title").find_next('a').text
        blog_post_link = soup.find("h1", class_="headline entry-title").find_next('a')['href']
        blog_post_date = datetime.datetime.strptime(soup.find("span", class_="byline-date byline-item").find_next('i').find_next('time').text, "%d/%m/%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_inwestuj_dlugoterminowo")


def get_info_from_mysteryfinanse():
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
        }
        page = requests.get("https://mysteryfinanse.pl/category/mysteryblog/", headers=headers)
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h2", class_="entry-title").find_next('a').text
        blog_post_link = soup.find("h2", class_="entry-title").find_next('a')['href']

        blog_post_day = soup.find("time", class_="entry-date published").text[:2]
        blog_post_month = str(month_string_to_date(soup.find("time", class_="entry-date published").text[2:6].strip()))
        if blog_post_month == 0:
            blog_post_month = str(month_string_to_date(soup.find("time", class_="entry-date published").text[1:5].strip()))
        blog_post_year = soup.find("time", class_="entry-date published").text[-4:]
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_mysteryfinanse")


def get_info_from_mlody_milioner():
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
        }
        page = requests.get("https://www.mlodymilioner.pl/", headers=headers)
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h3", class_="post-title entry-title").find_next('a').text
        blog_post_link = soup.find("h3", class_="post-title entry-title").find_next('a')['href']

        blog_post_comma_index = int(str(soup.find("h2", class_="date-header").text).find(','))
        blog_post_day = soup.find("h2", class_="date-header").text[blog_post_comma_index+1:blog_post_comma_index+3].strip()
        blog_post_month = str(month_string_to_date(soup.find("h2", class_="date-header").text[blog_post_comma_index+3:blog_post_comma_index+7].strip()))
        if blog_post_month == 0:
            blog_post_month = str(month_string_to_date(soup.find("h2", class_="date-header").text[blog_post_comma_index+4:blog_post_comma_index+8].strip()))
        blog_post_year = soup.find("h2", class_="date-header").text[-4:]
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_mlody_milioner")


def get_info_from_projekt_po_godzinach():
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
        }
        page = requests.get("https://projektpogodzinach.pl/", headers=headers)
        soup = BeautifulSoup(page.content, "html.parser")
        blog_post_list = []

        blog_post_title = soup.find("h2", class_="entry-title").find_next('a').text
        blog_post_link = soup.find("h2", class_="entry-title").find_next('a')['href']

        blog_post_day = soup.find("span", class_="ht-day").text
        blog_post_month = str(month_string_to_date(soup.find("span", class_="ht-month-year").text[:3].strip()))
        blog_post_year = soup.find("span", class_="ht-month-year").text[-4:].strip()
        blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
        blog_post_date = datetime.datetime.strptime(blog_post_date_string, "%d.%m.%Y").date()

        blog_post_list.append(blog_post_title)
        blog_post_list.append(blog_post_link)
        blog_post_list.append(blog_post_date)

        return blog_post_list
    except:
        logger.error("Something went wrong in scraping function: get_info_from_projekt_po_godzinach")


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
# result = get_info_from_sunscrapers_python()
# print(result)
# result = get_info_from_sunscrapers_web_development()
# print(result)
# result = get_info_from_niebezpiecznik()
# print(result)
# result = get_info_from_finax()
# print(result)
# result = get_info_from_tawcan()
# print(result)
# result = get_info_from_divgro()
# print(result)
# result = get_info_from_sky_is_the_limit()
# print(result)
# result = get_info_from_lynx_broker()
# print(result)
# result = get_info_from_itnext()
# print(result)
# result = get_info_from_prywatnyinvestor()
# print(result)
# result = get_info_from_dividends_and_income()
# print(result)
# result = get_info_from_make_life_easier()
# print(result)
# result = get_info_from_rewolucja_energetyczna()
# print(result)
# result = get_info_from_breadcrumbs_collector()
# print(result)
# result = get_info_from_dividend_stocks()
# print(result)
# result = get_info_from_obserwator_gospodarczy()
# print(result)
# result = get_info_from_inwestuj_dlugoterminowo()
# print(result)
# result = get_info_from_mysteryfinanse()
# print(result)
# result = get_info_from_mlody_milioner()
# print(result)
# result = get_info_from_projekt_po_godzinach()
# print(result)