from rest_framework import serializers
# from rest_framework_bulk import BulkListSerializer, BulkSerializerMixin
from .models import Event
from django.contrib.auth import get_user_model


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'name', 'location', 'description', 'date', 'imagePath')
        # list_serializer_class = BulkListSerializer


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = get_user_model().objects.create(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model = get_user_model()
        fields = ('username', 'password')
