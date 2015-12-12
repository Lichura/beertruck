from django.conf.urls import include,url 
from . import views

urlpatterns= patterns('', 
	url(r'', views.home),
	url(r'^contact_form/$',views.contact_form),
	url(r'^Contact/$', views.Contact),
    url(r'^search/$', views.search),
)