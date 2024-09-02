from rest_framework import mixins, viewsets
from .models import IMC
from .serializers import IMCSerializer

class IMCViewSet(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  viewsets.GenericViewSet):
    serializer_class = IMCSerializer

    def get_queryset(self):
        return IMC.objects.all()

    def perform_create(self, serializer):
        serializer.save()
