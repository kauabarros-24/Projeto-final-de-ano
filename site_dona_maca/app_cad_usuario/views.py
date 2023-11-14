from django.shortcuts import render

def home(request):
    return render(request, 'usuarios/home.html')

def usuarios(request):
    novo_usuario = Usuarios()
    #Salvar os usuários da tela para o banco de dados
    novo_usuario.nome = request.POST.get('nome')
    novo_usuario.idade = request.POST.get('idade')
    novo_usuario.save()
    usuarios = {
        'usuarios': Usuario.objects.all()
    }
    return render(request, 'usuarios/usuarios.html', usuarios)
    