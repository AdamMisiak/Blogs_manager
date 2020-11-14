# Blogs manager

Live version: ...

Website created to manage blogs subscriptions. Following, unfollowing, getting favourite blogs newsletters in one place. Using BeautifulSoup4 for scraping. Email notification for selected blogs. Created with Django framework.


## Table of contents
* [Technologies](#technologies)
* [Setup](#setup)
* [Contact](#contact)

## Technologies
* Python version: 3.8.5

## Setup
To run app locally:
```
python manage.py runserver
```

To run Celery workers:
```
celery -A blogs_manager beat -l info
celery -A blogs_manager worker -l info   
```

For home page of app:
```
http://127.0.0.1:8000/
```

## Contact
Created by Adam Misiak
