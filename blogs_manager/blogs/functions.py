import requests
from bs4 import BeautifulSoup

def get_info_from_trading_for_a_living():
    page = requests.get("https://www.tradingforaliving.pl/")
    soup = BeautifulSoup(page.content, 'html.parser')
    blog_post_list = []

    blog_post_title = soup.find("h2", class_="c-post-card__title c-post-card__title--featured").text
    blog_post_link = soup.find("h2", class_="c-post-card__title c-post-card__title--featured").find_next('a')['href']
    blog_post_date = str(soup.find("p", class_="c-post-card__special-date c-post-card__special-date--featured").text)
    blog_post_date = blog_post_date[1:].replace(' ', '.')
    
    blog_post_list.append(blog_post_date)
    blog_post_list.append(blog_post_title)
    blog_post_list.append(blog_post_link)

    return blog_post_list

result = get_info_from_trading_for_a_living()
print(result)