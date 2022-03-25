


function cadastraUsuario() {
    event.preventDefault()
    let url = "http://localhost/Cuidador/Cuidador/api/cuidador"
    let nome = document.getElementById("nome").value
    let dataNascimento = document.getElementById("dataNascimento").value
    let cpf = document.getElementById("cpf").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let foto = document.getElementById("fleFoto").value
    let biografia = document.getElementById("biografia").value
    let possuiAnimais = document.getElementById("possuiAnimais").value
    let possuiCriancas = document.getElementById("possuiCriancas").value
    let preferencias = document.getElementById("preferencias").value
    let moradia = document.getElementById("moradia").value
    let limitacoes = document.getElementById("limitacoes").value
    let avaliacao = document.getElementById("avaliacao").value
    let idSexoHost = document.getElementById("sltSexo").value
    let sobrenome = document.getElementById("sobrenome").value

    console.log(nome)
    console.log(email)

    body = {
        
        "nome": nome,
        "dataNascimento": dataNascimento,
        "cpf": cpf,
        "email": email,
        "senha": senha,
        "foto": foto,
        "biografia": biografia,
        "possuiAnimais": 1,
        "possuiCriancas": 1,
        "preferencias": preferencias,
        "moradia": moradia,
        "limitacoes": limitacoes,
        "avaliacao": avaliacao,
        "idSexoHost": idSexoHost,
        "sobrenome": sobrenome
    }

    fazPost(url, body)
}

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