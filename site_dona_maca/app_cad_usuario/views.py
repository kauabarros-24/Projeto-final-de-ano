from django.shortcuts import render
from .models import Usuarios

def home(request):
    return render(request,'usuarios/home.html')
    
def usuarios(request):
    #Salvar os dados da tela para o banco
    novo_usuario = Usuarios()
    novo_usuario.idade = request.POST.get('idade')
    novo_usuario.nome = request.POST.get('nome')
    novo_usuario.save()
    #Exibir os usuários cadastrados em uma nova página
    usuarios = {
        'usuarios': Usuarios.objects.all()
    }
    #Retornar para a página de listagem
    return render(request, 'usuarios/usuarios.html')