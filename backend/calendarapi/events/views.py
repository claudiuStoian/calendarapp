# from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Event
from .serializers import EventSerializer


class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]


class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [
        permissions.AllowAny
    ]
