# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2018-12-13 01:31
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sula', '0002_auto_20181213_0044'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cliente',
            name='sexo',
        ),
        migrations.RemoveField(
            model_name='productor',
            name='sexo',
        ),
        migrations.DeleteModel(
            name='Sexo',
        ),
    ]
