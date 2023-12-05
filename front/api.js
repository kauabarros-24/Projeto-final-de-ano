
document.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    let senha = document.getElementById('entradaSenha').value;
    let email = document.getElementById('entradaEmail').value;

    const data = {
        email: email,
        senha: senha,
    };

    try {
        await addUser();
        await getUsers();
    } catch (error) {
        console.error("Erro ao adicionar usuário:", error);
    }
});

async function addUser() {
    const response = await fetch('http://localhost:8000/users/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

async function getUsers() {
    const response = await fetch('http://localhost:8000/users/');
    const users = await response.json();
    document.write(JSON.stringify(users));
}
