from django.shortcuts import render
from cervezas import models as cerv_models

# Create your views here.
def home(request):
	marcas = cerv_models.Marcas.objects.all()
	cervezas = cerv_models.Cervezas.objects.all()
	return render(request, 'cervezas/home.html', {'cervezas': cervezas, 'marcas': marcas})
