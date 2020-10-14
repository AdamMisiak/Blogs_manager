from django.db import models

GENRE_CHOICES = (
    ("Science", "Science"),
    ("Cooking", "Cooking"),
    ("Personal", "Personal"),
    ("Motivational", "Motivational"),
    ("Travel", "Travel"),
    ("Lifestyle", "Lifestyle"),
    ("Humor", "Humor"),
    ("IT", "IT"),
    ("Financials", "Financials"),
)

class Blog(models.Model):
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    genre = models.CharField(choices=GENRE_CHOICES, default="Financial", max_length=30)
    genre2 = models.CharField(choices=GENRE_CHOICES, blank=True, max_length=30)

    def __str__(self):
        return self.name