<?php
require_once(SRC. 'bd/listarClientes.php');

function exibirClientes(){
    $dadosListar = listarClientes();
    return $dadosListar;
}
function buscarClientes($id)
{
   
   $dados = buscaCliente($id);
    
    return $dados;
    
    
}
function criarArrayCliente($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "idCliente" => $exibirDados['idCliente'],
            "nome" => $exibirDados['nome'],
            "cpf" => $exibirDados['cpf'],
            "dataNascimento" => $exibirDados['dataNascimento'],
            "foto" => $exibirDados['foto'],
            "email" => $exibirDados['email'],
            "senha" => $exibirDados['senha'],
            "idSexo" =>$exibirDados['idSexo'],
            "telefone" => $exibirDados['telefone'],
            "cep" => $exibirDados['cep'],
            "endereco" => $exibirDados['endereco'],
            "bairro" => $exibirDados['bairro'],         
            "cidade"   => $exibirDados['cidade'],
            "complemento" => $exibirDados['complemento'],
            "numero" => $exibirDados['numero']
           
        );

        $cont +=1; 
    }
 
  
 
    if(isset($arrayDados)){
        return $arrayDados;
    }else{
        return false;
    }
}


function criarJSONCLIENTE($arrayDados)
{
    
    header("content-type:application/json");

    $listarJSON = json_encode($arrayDados); 


    if(isset($listarJSON)){
        return $listarJSON;
     }else{
         return false;
    }
}


function busca($idCliente){
   
    $sql = "select tblClientes.*, tblPets.nome from tblClientes
	inner join tblPets
    on tblPets.idPet = tblClientes.idPet
    where tblClientes.idCliente = ".$idCliente;

    $conexao = conexao();

    $select = mysqli_query($conexao,$sql);

    return $select;
}


?>