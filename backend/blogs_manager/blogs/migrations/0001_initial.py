# Generated by Django 3.1.2 on 2020-10-14 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Blog",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200)),
                ("url", models.CharField(max_length=200)),
                ("author", models.CharField(max_length=100)),
                (
                    "genre",
                    models.CharField(
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
                        default="Financial",
                        max_length=30,
                    ),
                ),
                (
                    "genre2",
                    models.CharField(
                        blank=True,
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
                        max_length=30,
                    ),
                ),
            ],
        ),
    ]