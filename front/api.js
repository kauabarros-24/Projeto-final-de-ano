
// document.addEventListener('submit', () => {
//     alert('oi')
//     const senha = document.getElementById('entradaSenha').value;
//     const email = document.getElementById('entradaEmail').value;
//     // getUsers()
//     addUser()
// })


// const data = {
//     email: email,
//     senha: senha,
// }


async function addUser() {
    const Pemail = document.getElementById("entradaEmail").value;
    const Psenha = document.getElementById("entradaSenha").value;
    data = {
        email: Pemail,
        senha: Psenha
    }
    const response = await fetch('http://localhost:8000/users/', {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  const users = await response.json
  return response.json(); 
}

async function getUsers() {
    const response = await fetch('http://localhost:8000/users/')
    const users = await response.json()
    document.write(JSON.stringify(users))
}

// getUsers()
// addUser()




