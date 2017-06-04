from rest_framework import generics, permissions, status
from .models import Event
from .serializers import EventSerializer, UserSerializer
from django.contrib.auth import get_user_model
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
import urllib.request
import numpy as np


class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all().order_by('date')
    serializer_class = EventSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]


class EventDetail(APIView):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]

    def get_object(self, pk):
        try:
            return Event.objects.get(pk=pk)
        except Event.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        event = self.get_object(pk)
        serializer = EventSerializer(event)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        event = self.get_object(pk)
        domain_name = 'http://localhost:8000/'
        if domain_name not in request.data['imagePath']:
            temp = np.random.randint(1000, 1000000)
            extension = request.data['imagePath'].split(".")[-1]
            full_filename = 'media/Images/' + str(temp) + "." + extension
            urllib.request.urlretrieve(
                request.data['imagePath'], full_filename)
            request.data['imagePath'] = domain_name + full_filename
        serializer = EventSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        event = self.get_object(pk)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CreateUser(generics.CreateAPIView):
    model = get_user_model()
    serializer_class = UserSerializer
    permission_classes = [
        permissions.IsAuthenticated
    ]
