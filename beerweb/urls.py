from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    #url(r'^$', 'beerweb.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'cervezas.views.home', name='home'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^contact_form.html/$','cervezas.views.contact_form'),
    url(r'^contact/$', 'cervezas.views.contact'),
]
