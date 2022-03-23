<?php

require_once('../bd/conexao.php');

function inserirCliente($arrayCliente){
    $sql = "insert into tblClientes(
        nome,
        cpf,
        dataNascimento,
        email,
        senha,
       idSexo
       
      

      
    )
    values(
        '".$arrayCliente['nome']."',
        '".$arrayCliente['cpf']."',
        '".$arrayCliente['dataNascimento']."',
        '".$arrayCliente['email']."',
        '".$arrayCliente['senha']."',
        ".$arrayCliente['idSexo']."
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