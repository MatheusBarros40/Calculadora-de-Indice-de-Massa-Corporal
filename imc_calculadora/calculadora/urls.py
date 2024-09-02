# calculadora/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IMCViewSet

router = DefaultRouter()
router.register(r'imc', IMCViewSet, basename='imc')

urlpatterns = [
    path('', include(router.urls)),
]
