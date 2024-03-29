from django.db import models
from django.contrib.auth.models import User

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
    genre = models.CharField(choices=GENRE_CHOICES, default="IT", max_length=30)
    genre2 = models.CharField(choices=GENRE_CHOICES, blank=True, max_length=30)
    language = models.CharField(default="Polish", max_length=100)

    def __str__(self):
        return self.name


class BlogPost(models.Model):
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=200)
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='blog_post')
    date = models.DateTimeField()


    class Meta:
        ordering = ('-date',)

    def __str__(self):
        return self.name


class BlogPhoto(models.Model):
    photo = models.ImageField(upload_to='blogs_manager/static/img')
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name='blog_photo')


class ReportBlog(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blogs_reported')
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=200)
