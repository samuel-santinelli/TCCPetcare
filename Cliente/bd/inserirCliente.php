<?php

require_once('../bd/conexao.php');

function inserirCliente($arrayCliente){
    $sql = "insert into tblClientes(
        nome,
        cpf,
        dataNascimento,
        foto,
        email,
        senha,
       idSexo,
       telefone,
       endereco,
       cep,
       cidade,
       bairro,
       complemento,
       numero
    )
    values(
        '".$arrayCliente['nome']."',
        '".$arrayCliente['cpf']."',
        '".$arrayCliente['dataNascimento']."',
        '".$arrayCliente['foto']."',
        '".$arrayCliente['email']."',
        '".$arrayCliente['senha']."',
        ".$arrayCliente['idSexo'].",
        '".$arrayCliente['telefone']."',
        '".$arrayCliente['endereco']."',
        '".$arrayCliente['cep']."',
        '".$arrayCliente['cidade']."',
        '".$arrayCliente['bairro']."',
        '".$arrayCliente['complemento']."',
        '".$arrayCliente['numero']."'

         )
";




$conexao = conexao();

// echo($sql);
// die;
// $idCliente =  mysqli_insert_id($conexao);
// echo($idCliente);
// echo($sql);
// // die;

//      return true;
//     return $idCliente;
   
    
if($resultado = mysqli_query($conexao, $sql)){
     return true;
    
    }else{
        return false;
    }

}
?>