from .settings import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

SECRET_KEY = 'k5+0g$25=qdggcqcc67aeftf1rqt=n-6^6r-u*(()@u(4%)u4g'

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['*'] 

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
# EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'


try:
    from .local import *
except ImportError:
    pass