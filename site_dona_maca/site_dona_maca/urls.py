from django.contrib import admin
from django.urls import path
from app_cad_usuario import views

urlpatterns = [
    #Rota, view responsável, nome de referência
    #Ex: Facebook.com
    path('', views.home, name='home'),
    # usuarios.com
    path('usuarios/', views.usuarios, name = 'listagem_usuarios')
    
   
   
]
