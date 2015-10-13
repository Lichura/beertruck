from django.contrib import admin
from cervezas import models as cerv_model

# Register your models here.

cervezas_models = [cerv_model.Marcas, cerv_model.Cervezas, cerv_model.Cervezas_stock]
forms_models= [cerv_model.Mails]
admin.site.register(cervezas_models)
admin.site.register(forms_models)