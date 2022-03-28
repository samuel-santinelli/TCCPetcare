
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
    let dataNascimento = document.getElementById("dataNascimento").value
    let cpf = document.getElementById("cpf").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let foto = document.getElementById("fleFoto").value


    console.log(nome)
    console.log(email)

    body = {
        
        "nome": nome,
        "dataNascimento": dataNascimento,
        "cpf": cpf,
        "email": email,
        "senha": senha,
        "foto": foto,
    }

    fazPost(url, body)
}

