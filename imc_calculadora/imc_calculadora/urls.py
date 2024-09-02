# imc_calculadora/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('calculadora.urls')),  # Inclui as URLs do aplicativo calculadora
    # ... outras URLs do projeto ...
]
