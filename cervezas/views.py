from django.shortcuts import render

# Create your views here.
def cervezas_list(request):
	return render(request, 'cervezas/cervezas_list.html', {})
