# Generated by Django 3.1.2 on 2020-12-09 16:20

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_blogpostopened'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpostopened',
            name='date',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
