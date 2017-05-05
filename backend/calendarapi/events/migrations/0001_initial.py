# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-05-03 22:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('location', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('date', models.DateTimeField()),
                ('imagePath', models.TextField()),
            ],
        ),
    ]
