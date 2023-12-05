alert("Olá");
document.addEventListener('submit', (event) => {
    event.preventDefault();
    const senha = document.getElementById('entradaSenha').value;
    const email = document.getElementById('entradaEmail').value;

  const data = {
        email: email,
        senha: senha,
    }

    async function addUser() {
        const response = await fetch('http://localhost:8000/users/', {
            method: "POST",
            headers: {
                "Conten t-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return response.json()
    }

    async function getUsers() {
        const response = await fetch('http://localhost:8000/users/')
        const users = await response.json()
        document.write(JSON.stringify(users))
    }

    getUsers()
    addUser()

})
