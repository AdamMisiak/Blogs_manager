# Generated by Django 3.1.2 on 2021-01-07 15:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0003_blogpostopened_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('object_id', models.TextField()),
                ('action', models.CharField(choices=[('C', 'Create'), ('U', 'Update'), ('D', 'Delete'), ('L', 'Logged in'), ('O', 'Logged out')], max_length=1)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
