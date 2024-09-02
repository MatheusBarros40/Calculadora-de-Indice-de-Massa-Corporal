from rest_framework import serializers
from .models import IMC

class IMCSerializer(serializers.ModelSerializer):
    class Meta:
        model = IMC
        fields = ['id', 'nome', 'altura', 'peso', 'imc']