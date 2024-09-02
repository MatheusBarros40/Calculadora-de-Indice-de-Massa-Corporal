from rest_framework import serializers
from .models import IMC

class IMCSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    nome = serializers.CharField(max_length=100)
    altura = serializers.FloatField()
    peso = serializers.FloatField()
    imc = serializers.FloatField(read_only=True)

    def create(self, validated_data):
        instance = IMC(**validated_data)
        instance.calcular_imc()
        instance.save()
        return instance
