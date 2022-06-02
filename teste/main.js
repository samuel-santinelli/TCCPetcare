function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(cuidador) {
    console.log(cuidador)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdFoto = document.createElement("td");
    tdId.innerHTML = cuidador.id
    tdFoto.innerHTML = cuidador.foto

    linha.appendChild(tdId);
    linha.appendChild(tdFoto);

    return linha;
}

function main() {
    let data = fazGet("http://localhost/Cuidador/cuidador/api/cuidador");
    let cuidador = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    cuidador.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()


function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdFoto = document.createElement("td");
    tdSenha = document.createElement("td");
    tdId.innerHTML = usuario.id
    tdFoto.innerHTML =`
    <div class="imagem-container">
        <img class= "imgPreview" alt="fotinha" src="${usuario.foto}">
   </div>  
   <div class="caixaTags">
     <div class="tags">
        ${usuario.foto}
        </div>
   </div> `

    linha.appendChild(tdId);
    linha.appendChild(tdFoto);

    return linha;
}

function main() {
    let data = fazGet("http://localhost/Cuidador/cuidador/api/cuidador");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()

