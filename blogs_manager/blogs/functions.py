import requests
import datetime
from bs4 import BeautifulSoup

def get_info_from_trading_for_a_living():
    page = requests.get("https://www.tradingforaliving.pl/")
    soup = BeautifulSoup(page.content, 'html.parser')
    blog_post_list = []

    blog_post_title = soup.find("h2", class_="c-post-card__title c-post-card__title--featured").text
    blog_post_link = soup.find("h2", class_="c-post-card__title c-post-card__title--featured").find_next('a')['href']
    blog_post_date = str(soup.find("p", class_="c-post-card__special-date c-post-card__special-date--featured").text)
    blog_post_date = blog_post_date[1:].replace(' ', '.')
    blog_post_date = datetime.datetime.strptime(blog_post_date, '%d.%m.%y').date()

    blog_post_list.append(blog_post_date)
    blog_post_list.append(blog_post_title)
    blog_post_list.append(blog_post_link)

    return blog_post_list

def get_info_from_pamietnik_gieldowy():
    page = requests.get("http://www.pamietnikgieldowy.pl/")
    soup = BeautifulSoup(page.content, 'html.parser')
    blog_post_list = []

    blog_posts = soup.find("div", class_="date-outer")
    blog_post_title = blog_posts.find('div', class_='post-body entry-content').findChildren('span')[0].text
    blog_post_link = soup.find("h3", class_="post-title entry-title").find_next('a')['href']
    # print(str(blog_posts.find('div', class_='post-body entry-content').findChildren('b')[0].text).strip())
    blog_post_date = datetime.datetime.strptime(str(blog_posts.find('div', class_='post-body entry-content').findChildren('b')[0].text).strip(), '%d.%m.%Y').date()
    
    blog_post_list.append(blog_post_date)
    blog_post_list.append(blog_post_title)
    blog_post_list.append(blog_post_link)

    return blog_post_list

result = get_info_from_pamietnik_gieldowy()
print(result)