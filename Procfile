web: gunicorn blogs_manager.wsgi
worker: celery -A blogs_manager worker --beat --loglevel=info