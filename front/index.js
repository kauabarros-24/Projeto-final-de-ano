const email = document.getElementsByName('email');
const senha = document.getElementsById('senha');
const confirma_senha = document.getElementsById('senha-confirmada');
alert('Ol');

if (confirma_senha != senha) {
    alert('Confirme a senha corretamente!');
}
else {
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

}

