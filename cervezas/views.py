from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.http import HttpResponse
from cervezas import models as cerv_models
from datetime import datetime
from .forms import ContactForm
from django.template.loader import render_to_string
from django.template.loader import get_template
from django.template import Context




# Create your views here.
def home(request):
	marcas = cerv_models.Marcas.objects.all()
	cervezas = cerv_models.Cervezas.objects.all()
	return render(request, 'cervezas/home.html', {'cervezas': cervezas, 'marcas': marcas})

#def contact_form(request):
#	return render(request, 'cervezas/contact_form.html')




def contact(request):
	template_html = 'cervezas/email.html'
	template_text = 'cervezas/email.txt'
	destinatarios = []
	errors = []
	if request.method == 'POST':
		if not request.POST.get('Nombre', ''):
			errors.append('Por favor ingrese su nombre.')
		if not request.POST.get('Comentario', ''):
			errors.append('Por favor complete la sección de comentarios.')
		if not errors:
			nombre = request.POST['Nombre']
			subject, from_email, to = 'The Craft Beer Truck', 'prueba@thecraftbeertruck.com.ar',request.POST['email']
			text_content = 'The Craft Beer Truck'
			html_content = render_to_string(template_html, {"nombre": nombre})
			msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
			msg.attach_alternative(html_content, "text/html")
			msg.send()		
			return render(request,'cervezas/home.html')
	return render(request, 'cervezas/home.html', {'errors': errors})




# def contact(request):
# 	destinatarios = []
# 	errors = []
# 	if request.method == 'POST':
# 		if not request.POST.get('Nombre', ''):
# 			errors.append('Por favor ingrese su nombre.')
# 		if not request.POST.get('Comentario', ''):
# 			errors.append('Por favor complete la sección de comentarios.')
# 		if not errors:
# 			#msg_html = render_to_string('cervezas/email.html', {'nombre': request.POST['Nombre']})
# 			#message1 = (
# 			#	request.POST['Nombre'],
# 			#	request.POST['Comentario'],
# 			#	request.POST['email'], 
# 			#	['prueba@thecraftbeertruck.com.ar']
# 			#)
# 			destinatarios.append(request.POST['email'])
# 			send_mail(
# 			        'Gracias por contactarte con The Craft Beer Truck',
#     				get_template('cervezas/email.html').render(
#         				Context({
#             				'username': request.POST['Nombre'],
#         				})
#     				),
#     				'prueba@thecraftbeertruck.com.ar',
#     				destinatarios,
#     				fail_silently = False
#     		)			
# 			return render(request,'cervezas/home.html')
# 	return render(request, 'cervezas/home.html', {'errors': errors})