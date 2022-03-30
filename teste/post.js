
function fazPost(url, body) {
    console.log(body)
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
    let data = document.getElementById("data").value
    let cpf = document.getElementById("cpf").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let telefone = document.getElementById("telefone").value
    let idSexo = document.getElementById("sltSexo").value

    // console.log(nome)
    // console.log(email)

    body = {
        
        "nome": nome,
        "cpf": cpf,
        "data": data,
        "email": email,
        "senha": senha,
        "idSexo": idSexo,
        "telefone": telefone
    }

    fazPost(url, body)
}

