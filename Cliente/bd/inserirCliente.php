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
       telefone
       
      

      
    )
    values(
        '".$arrayCliente['nome']."',
        '".$arrayCliente['cpf']."',
        '".$arrayCliente['dataNascimento']."',
        '".$arrayCliente['foto']."',
        '".$arrayCliente['email']."',
        '".$arrayCliente['senha']."',
        ".$arrayCliente['idSexo'].",
        '".$arrayCliente['telefone']."'
         )
";




$conexao = conexao();

// echo($sql);
// die;

if($resultado = mysqli_query($conexao, $sql)){
     return true;
    
    }else{
        return false;
    }

}
?>