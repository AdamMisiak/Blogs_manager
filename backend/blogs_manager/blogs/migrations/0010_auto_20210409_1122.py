# Generated by Django 3.1.2 on 2021-04-09 11:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0009_remove_blogpost_opened'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='blogpost',
            options={'ordering': ('-date',)},
        ),
        migrations.RenameField(
            model_name='blogpost',
            old_name='added',
            new_name='date',
        ),
    ]