# Generated by Django 3.1.2 on 2020-11-14 10:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0005_blog_icon'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='icon',
        ),
    ]