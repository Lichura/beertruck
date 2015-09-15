from django.conf.urls import include,url 
from . import views

urlpatterns= [
	url(r'^cervezas$', views.cervezas_list),
	url(r'', views.home),
	url(r'^contact$', views.contact),
]