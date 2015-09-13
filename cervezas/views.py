from django.shortcuts import render
from cervezas import models as cerv_models

# Create your views here.
def cervezas_list(request):
	cervezas = cerv_models.Cervezas.objects.all()
	return render(request, 'cervezas/cervezas_list.html', {'cervezas': cervezas})

def home(request):
	return render(request, 'cervezas/home.html', {})