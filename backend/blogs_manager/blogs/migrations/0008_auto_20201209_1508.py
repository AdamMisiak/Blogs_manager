# Generated by Django 3.1.2 on 2020-12-09 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0007_blogphoto'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='opened',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='blogphoto',
            name='photo',
            field=models.ImageField(upload_to='blogs_manager/static/img'),
        ),
    ]
