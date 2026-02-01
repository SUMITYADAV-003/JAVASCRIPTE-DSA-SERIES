from django.db import models
from django.utils import timezone


class Category(models.Model):
    name = models.CharField(max_length=100,blank=True,null=True)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return self.name


