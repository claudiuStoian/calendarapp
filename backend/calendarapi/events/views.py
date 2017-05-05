# from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework_bulk import ListBulkCreateUpdateDestroyAPIView
from .models import Event
from .serializers import EventSerializer


class EventList(ListBulkCreateUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [
        permissions.AllowAny
    ]


class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [
        permissions.AllowAny
    ]
