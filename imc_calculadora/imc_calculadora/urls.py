from django.urls import path, include
from rest_framework.routers import DefaultRouter
from calculadora.views import IMCViewSet

router = DefaultRouter()
router.register(r'imc', IMCViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]