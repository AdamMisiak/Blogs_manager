# Generated by Django 3.1.2 on 2021-04-13 08:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_auto_20210323_1414'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userlog',
            name='user',
        ),
        migrations.DeleteModel(
            name='BlogPostOpened',
        ),
        migrations.DeleteModel(
            name='UserLog',
        ),
    ]
