from django import forms

class ContactForm(forms.Form):
	nombre=forms.CharField(label='Nombre',max_length=100)
	mail=forms.CharField(label='Email',max_length=150)
	telefono=forms.IntegerField(label='Telefono')
	comentario=forms.CharField(label='Comentario',max_length=1000)
	fecha_hora=forms.DateTimeField()