# Generated by Django 3.1.2 on 2021-05-19 18:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0008_auto_20210426_1813'),
    ]

    operations = [
        migrations.AlterField(
            model_name='emailsetting',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='email_setting', to=settings.AUTH_USER_MODEL),
        ),
    ]
