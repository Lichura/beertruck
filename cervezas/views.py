from django.core.mail import send_mail
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.http import HttpResponse
from cervezas import models as cerv_models
from datetime import datetime
from .forms import ContactForm

# Create your views here.
def home(request):
	marcas = cerv_models.Marcas.objects.all()
	cervezas = cerv_models.Cervezas.objects.all()
	return render(request, 'cervezas/home.html', {'cervezas': cervezas, 'marcas': marcas})

def contact_form(request):
	return render(request, 'cervezas/contact_form.html')

def contact(request):
	errors = []
	if request.method == 'POST':
		if not request.POST.get('Nombre', ''):
			errors.append('Por favor ingrese su nombre.')
		if not request.POST.get('Comentario', ''):
			errors.append('Por favor complete la sección de comentarios.')
		if not errors:
			send_mail(
				request.POST['Nombre'],
				request.POST['Comentario'],
				request.POST['email'], 
				['lichun88@gmail.com'],
				fail_silently=False
			)	
			return render(request,'cervezas/home.html')
	return render(request, 'cervezas/contact_form.html', {'errors': errors})