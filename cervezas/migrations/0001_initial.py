# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cervezas',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('nombre', models.CharField(max_length=30)),
                ('descripcion', models.CharField(max_length=200)),
                ('foto', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Cervezas_stock',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('tamanio', models.CharField(max_length=15)),
                ('foto', models.CharField(max_length=50)),
                ('stock', models.BooleanField(default=False)),
                ('numero_estrellas', models.IntegerField()),
                ('cerveza', models.ForeignKey(to='cervezas.Cervezas')),
            ],
        ),
        migrations.CreateModel(
            name='Marcas',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('marca', models.CharField(max_length=30)),
                ('descripcion', models.CharField(max_length=150)),
                ('foto', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='cervezas_stock',
            name='marca',
            field=models.ForeignKey(to='cervezas.Marcas'),
        ),
        migrations.AddField(
            model_name='cervezas',
            name='marca',
            field=models.ForeignKey(to='cervezas.Marcas'),
        ),
    ]
