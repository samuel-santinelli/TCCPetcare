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
    tdNome = document.createElement("td");
    tdId.innerHTML = cuidador.id
    tdNome.innerHTML = cuidador.nome

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;
}

function main() {
    let data = fazGet("http://localhost/Cuidador/Cuidador/api/cuidador");
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