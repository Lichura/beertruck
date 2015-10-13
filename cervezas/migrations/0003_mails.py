# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('cervezas', '0002_auto_20150913_1208'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mails',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', serialize=False, auto_created=True)),
                ('nombre', models.CharField(max_length=100)),
                ('mail', models.CharField(max_length=150)),
                ('telefono', models.IntegerField()),
                ('comentario', models.CharField(max_length=1000)),
                ('fecha_hora', models.DateTimeField(default=datetime.datetime.now, blank=True)),
            ],
        ),
    ]
