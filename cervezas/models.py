from django.db import models
from django.utils import timezone

# Create your models here.
class Marcas(models.Model):
	marca = models.CharField(max_length=30)
	descripcion = models.CharField(max_length=150)
	foto = models.URLField(blank=True)
	
	def __str__(self):
		return self.marca

class Cervezas(models.Model):
	marca = models.ForeignKey(Marcas)
	nombre = models.CharField(max_length=30)
	descripcion = models.CharField(max_length=200)
	foto = models.URLField(blank=True)
	
	def __str__(self):
		return self.nombre
		
class Cervezas_stock(models.Model):
	marca = models.ForeignKey(Marcas)
	cerveza = models.ForeignKey(Cervezas)
	tamanio = models.CharField(max_length=15)
	foto = models.URLField(blank=True)
	stock = models.BooleanField(default=False)
	numero_estrellas = models.IntegerField()
	
	def __str__(self):
		return self.tamanio
	
	
