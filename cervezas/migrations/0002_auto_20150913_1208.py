# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cervezas', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cervezas',
            name='foto',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='cervezas_stock',
            name='foto',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='marcas',
            name='foto',
            field=models.URLField(blank=True),
        ),
    ]
