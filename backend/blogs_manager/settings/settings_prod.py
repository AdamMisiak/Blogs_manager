from .settings import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'k5+0g$25=qdggcqcc67aeftf1rqt=n-6^6r-u*(()@u(4%)u4g'

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['*'] 

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

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

try:
    from .local import *
except ImportError:
    pass