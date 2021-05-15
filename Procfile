release: python manage.py migrate
web: gunicorn blogs_manager.wsgi
worker: celery -A blogs_manager worker -B --loglevel=info
beat: celery -A blogs_manager beat -B --loglevel=info