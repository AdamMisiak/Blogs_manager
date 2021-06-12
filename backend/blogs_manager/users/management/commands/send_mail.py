from django.core.management.base import BaseCommand
from django.utils import timezone
from django.core.mail import send_mail

class Command(BaseCommand):

    def handle(self, *args, **kwargs):

        send_mail(
            subject = 'JUHUUU',
            message = 'test',
            from_email = 'adammi.adam@gmail.com',
            recipient_list = ['adammisiak3@gmail.com',],
            fail_silently = False,
        )