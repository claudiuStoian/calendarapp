# from django.shortcuts import render
from rest_framework import generics, permissions
# from rest_framework_bulk import ListBulkCreateUpdateDestroyAPIView
from .models import Event
from .serializers import EventSerializer, UserSerializer
from django.contrib.auth import get_user_model


class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]


class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]


class CreateUser(generics.CreateAPIView):
    model = get_user_model()
    serializer_class = UserSerializer
    permission_classes = [
        permissions.AllowAny
    ]
