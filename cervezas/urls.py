from django.conf.urls import include,url 
from . import views

urlpatterns= [
	url(r'^$', views.cervezas_list),
	url(r'', views.home),
]