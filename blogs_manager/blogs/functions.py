import requests
import datetime
from bs4 import BeautifulSoup


def month_string_to_date(month_string):
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
    elif month_string[:3].lower() == "paź":
        month_date = 10
    elif month_string[:3].lower() == "lis":
        month_date = 11
    elif month_string[:3].lower() == "gru":
        month_date = 12
    return month_date


def get_info_from_trading_for_a_living():
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


def get_info_from_pamietnik_gieldowy():
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
            )[blog_post_comma_index + 5 : blog_post_comma_index + 8]
        )
    )
    blog_post_day = str(
        blog_posts.find("h2", class_="date-header").findChildren("span")[0].text
    )[blog_post_comma_index + 2 : blog_post_comma_index + 4]

    blog_post_date_string = blog_post_day + "." + blog_post_month + "." + blog_post_year
    blog_post_date = datetime.datetime.strptime(
        blog_post_date_string, "%d.%m.%Y"
    ).date()

    blog_post_list.append(blog_post_title)
    blog_post_list.append(blog_post_link)
    blog_post_list.append(blog_post_date)

    return blog_post_list


def get_info_from_inwestomat():
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


def get_info_from_independenttrader():
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


def get_info_from_usstocks():
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

# result = get_info_from_inwestomat()
# print(result)
# result = get_info_from_pamietnik_gieldowy()
# print(result)
# result = get_info_from_trading_for_a_living()
# print(result)
# result = get_info_from_independenttrader()
# print(result)
# result = get_info_from_usstocks()
# print(result)

