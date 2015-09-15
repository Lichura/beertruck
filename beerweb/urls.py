from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    #url(r'^$', 'beerweb.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'cervezas.views.home', name='home'),
    url(r'^admin/', include(admin.site.urls)),
    #url(r'^cervezas/', include('cervezas.urls')),
    url(r'^cervezas/', 'cervezas.views.cervezas_list', name='cervezas'),
    url(r'^contact/', 'cervezas.views.contact', name='contact'),
    url(r'^gallery/', 'cervezas.views.gallery', name='gallery'),
	url(r'^services/', 'cervezas.views.services', name='services'),
]
