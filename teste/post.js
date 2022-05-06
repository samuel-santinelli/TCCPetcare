
// function fazPost(url, body) {
//     console.log(body)
//     let request = new XMLHttpRequest()
//     request.open("POST", url, true)
//     request.setRequestHeader("Content-type", "application/json")
//     request.send(JSON.stringify(body))

//     request.onload = function() {
//         console.log(this.responseText)
//     }

//     return request.responseText
// }

// function cadastraUsuario() {
//     event.preventDefault()
//     let url = "http://localhost/Cuidador/Cliente/api/cliente"
//     let nome = document.getElementById("nome").value
//     let data = document.getElementById("data").value
//     let cpf = document.getElementById("cpf").value
//     let email = document.getElementById("email").value
//     let senha = document.getElementById("senha").value
//     let telefone = document.getElementById("telefone").value
//     let idSexo = document.getElementById("sltSexo").value

//     // console.log(nome)
//     // console.log(email)

//     body = {
        
//         "nome": nome,
//         "cpf": cpf,
//         "data": data,
//         "email": email,
//         "senha": senha,
//         "idSexo": idSexo,
//         "telefone": telefone
//     }

//     fazPost(url, body)
// }

// function fazPost(url, body) {
//     console.log("Body=", body)
//     let request = new XMLHttpRequest()
//     request.open("POST", url, true)
//     request.setRequestHeader("Content-type", "application/json")
//     request.send(JSON.stringify(body))

//     request.onload = function() {
//         console.log(this.responseText)
//     }

//     return request.responseText
// }


// function cadastraUsuario() {
//     event.preventDefault()
//     let url = "http://localhost/Cuidador/Cliente/api/cliente"
//     let nome = document.getElementById("nome").value
//     let email = document.getElementById("email").value
//     console.log(nome)
//     console.log(email)

//     body = {
//         "name": nome,
//         "email": email
//     }

//     fazPost(url, body)
// }
// const criarCadastroElement = (item) =>{

// }

// dados.forEach(item =>{
//     const clienteElement = criarCadastroElement()
// })





// const novoCadastro = () =>{
//     // console.log("Clicou");
//         const nome = document.getElementById("nome")
//         const cpf = document.getElementById("cpf")
//         const data = document.getElementById("data")
//         const email = document.getElementById("email")
//         const senha = document.getElementById("senha")
//         const idSexo = document.getElementById("sltSexo")
//         const telefone = document.getElementById("telefone")
     
  
//         const cliente = {
//             nome: nome.value,
//             cpf: cpf.value,
//             data:data.value,
//             email: email.value,
//             senha: senha.value,
//             idSexo: idSexo.value,
//             telefone: telefone.value
//         }

//         const init = {
//             method: 'POST',
//             headers:{
//                 "Content-Type": 'application/json'
//             },
//             body:JSON.stringify(cliente)
//         }

//         //chamar Post na API
//         const response = await fetch('http://localhost/Cuidador/Cliente/api/pets/inserir', init)
//         const dados = await response.json()

//         //adicionar outro cadastro
// }

// window.onload = () =>{

//     const cadastrar = document.getElementById('cadastrar');

//     cadastrar.onclick = novoCadastro
//     // cadastrar.onclick = () =>{
//     //     console.log('Novo cadastro')
//     // }
// }

function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}


function cadastraUsuario() {
    event.preventDefault()
    let url = "http://localhost/Cuidador/Cliente/api/cliente"
    let nome = document.getElementById("nome").value
    let cpf = document.getElementById("cpf").value
    let dataNascimento = document.getElementById("dataNascimento").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let idSexo = document.getElementById("sltSexo").value
    console.log(nome)
    console.log(email)

    body = {
        "nome": nome,
        "cpf": cpf,
        "dataNascimento": dataNascimento,
        "email": email,
        "senha": senha,
        "idSexo": 1,
        "telefone": telefone
    }

    fazPost(url, body)
}