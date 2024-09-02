from rest_framework import viewsets
from .models import IMC
from .serializers import IMCSerializer

class IMCViewSet(viewsets.ModelViewSet):
    queryset = IMC.objects.all()
    serializer_class = IMCSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        instance.calcular_imc()