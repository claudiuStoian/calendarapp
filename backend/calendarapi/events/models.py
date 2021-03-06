from django.db import models


class Event(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateTimeField(auto_now=False, auto_now_add=False)
    imagePath = models.TextField()
    faculty = models.CharField(max_length=255)
    eventType = models.CharField(max_length=255)
    lat = models.FloatField()
    lng = models.FloatField()

    def __str__(self):
        return self.name
