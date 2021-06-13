from .settings import *
import os

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'k5+0g$25=qdggcqcc67aeftf1rqt=n-6^6r-u*(()@u(4%)u4g'

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['blogs-manager.herokuapp.com'] 

# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_HOST = 'smtp.sendgrid.net'
EMAIL_HOST_USER = 'apikey'
EMAIL_HOST_PASSWORD = os.environ['EMAIL_HOST_PASSWORD']
EMAIL_PORT = 587
EMAIL_USE_TLS = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ['DATABASE_NAME'],
        'USER': os.environ['DATABASE_USER'],
        'PASSWORD': os.environ['DATABASE_PASSWORD'],
        'HOST': os.environ['DATABASE_HOST'],
        # 'HOST': 'localhost',
        'PORT': 5432,
    }
}

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'simple': {
            'format': '[%(asctime)s] %(message)s',
            'datefmt': '%Y-%m-%d %H:%M:%S %z'
        },
    },
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
    },
    'loggers': {
        'scraping_functions': {
            'level': 'DEBUG',
            'handlers': ['console'],
            'propagate': False
        },
        'celery.worker': {
            'level': 'ERROR',
            'handlers': ['console'],
            'propagate': False
        },
    }
}

CACHES = {
    "default": {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": "redis://redistogo:05a9c7e586994e5e0a2a205c04f03e19@soapfish.redistogo.com:11414/",
        # "OPTIONS": {
        #     "CLIENT_CLASS": "django_redis.client.DefaultClient",
        #     "PASSWORD": "pf2b7503729730fb2075fd836cb91ee9ed408996caecb8198b71bcc37decee05d"
        # }
    }
}

try:
    from .local import *
except ImportError:
    pass