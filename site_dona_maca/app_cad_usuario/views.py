from django.shortcuts import render
from .models import Usuarios

def home(request):
    return render(request,'usuarios/home.html')

def usuarios(request):
    #Salvar os usuarios
    novo_usuario = Usuarios()
    novo_usuario.email = request.POST.get('email')
    novo_usuario.senha = request.POST.get('senha')
    novo_usuario.save()
    #Exibir todos os usuários
    usuarios = {
        'usuarios': Usuarios.objects.all()
    }
    #Retornar os dados para a página de listagem de usuários
    return render(request, 'usuarios/home.html', usuarios)
    

    