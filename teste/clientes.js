  
const criarCadastroElement = (item) =>{
       //conectar no elemento template
       const template = document.getElementById('cliente-template')

       //clonar template
       const clienteElement = document.importNode(template.content,true)

       //preencher os dados
       const itens_clientes = clienteElement.querySelectorAll('span')

       itens_clientes[0].innerText = item.cpf
       itens_clientes[1].innerText = item.dataNascimento
       itens_clientes[2].innerText = item.email
       itens_clientes[3].innerText = item.foto
       itens_clientes[4].innerText = item.idSexo
       itens_clientes[5].innerText = item.nome
       itens_clientes[6].innerText = item.senha
       // itens_clientes[7].innerText = item.telefone

       return clienteElement
}



 const carregarClientes = async () =>{

    //Comunicação com api
    const response = await fetch('http://localhost/Cuidador/Cliente/api/cliente')
    const dados = await response.json()
    console.log(dados)

    dados.forEach(item =>{
        const containerClientesElement = document.getElementById('container-clientes')

       
        const clienteElement = criarCadastroElement(item)
     
        //adicona o elemento cliente ao container de cliente
        containerClientesElement.append(clienteElement)
    })

 }


 const novoCadastro = async() =>{
    // console.log("Clicou");
        const nome = document.getElementById("nome")
        const cpf = document.getElementById("cpf")
        const data = document.getElementById("data")
        const email = document.getElementById("email")
        const senha = document.getElementById("senha")
        const idSexo = document.getElementById("sltSexo")
        const telefone = document.getElementById("telefone")
     
  
        const cliente = {
            nome: nome.value,
            cpf: cpf.value,
            data:data.value,
            email: email.value,
            senha: senha.value,
            idSexo: idSexo.value,
            telefone: telefone.value
        }

        const init = {
            method: 'POST',
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify(cliente)
        }

        //chamar Post na API
        const response = await fetch('http://localhost/Cuidador/Cliente/api/cliente', init)
        const dados = await response.json()

        //adicionar outro cadastro
        const containerClientesElement = document.getElementById('container-clientes')
       
        const clienteElement = criarCadastroElement(dados)
     
        //adicona o elemento cliente ao container de cliente
        containerClientesElement.prepend(clienteElement)

}



window.onload = ()=>{
    carregarClientes()
    console.log('iniciado')
}


// const criarCadastroElement = (item) =>{

// }

// dados.forEach(item =>{
//     const clienteElement = criarCadastroElement()
// })







