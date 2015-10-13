# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cervezas', '0003_mails'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mails',
            name='fecha_hora',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
