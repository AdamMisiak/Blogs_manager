release: python manage.py migrate
web: gunicorn blogs_manager.wsgi
worker: celery -A blogs_manager worker -B --loglevel=info