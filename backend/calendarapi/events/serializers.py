from rest_framework import serializers
from rest_framework_bulk import BulkListSerializer, BulkSerializerMixin
from .models import Event


class EventSerializer(serializers.ModelSerializer, BulkSerializerMixin):
    class Meta:
        model = Event
        fields = ('id', 'name', 'location', 'description', 'date', 'imagePath')
        list_serializer_class = BulkListSerializer
        # id = serializers.IntegerField()
