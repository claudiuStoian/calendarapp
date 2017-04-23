from django.db import models


class Event(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateTimeField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.name
