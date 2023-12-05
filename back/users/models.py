from django.db import models

# Create your models here.
class User(models.Model):
    email = models.EmailField()
    senha = models.TextField(max_length=255)