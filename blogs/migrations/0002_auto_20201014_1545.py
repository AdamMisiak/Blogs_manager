# Generated by Django 3.1.2 on 2020-10-14 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blogs", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="blog",
            name="language",
            field=models.CharField(default="Polish", max_length=100),
        ),
        migrations.AlterField(
            model_name="blog",
            name="genre",
            field=models.CharField(
                choices=[
                    ("Science", "Science"),
                    ("Cooking", "Cooking"),
                    ("Personal", "Personal"),
                    ("Motivational", "Motivational"),
                    ("Travel", "Travel"),
                    ("Lifestyle", "Lifestyle"),
                    ("Humor", "Humor"),
                    ("IT", "IT"),
                    ("Financials", "Financials"),
                ],
                default="IT",
                max_length=30,
            ),
        ),
    ]
