<?php

require_once('../bd/conexao.php');

function editaCliente($arrayCliente)
{
    $sql = "update tblClientes set 
            nome = '".$arrayCliente['nome']."',
            cpf =  '".$arrayCliente['cpf']."',
            dataNascimento =  '".$arrayCliente['dataNascimento']."',
            foto = '".$arrayCliente['foto']."',
            email = '".$arrayCliente['email']."',
            senha = '".$arrayCliente['senha']."',
            idSexo = ".$arrayCliente['idSexo'].",
            telefone = '".$arrayCliente['telefone']."'
            
    
        where idCliente= ".$arrayCliente['id'];
        $conexao = conexao();
       
// echo($sql);
//     die;

        if(mysqli_query($conexao,$sql)){
             return true;
            // echo('foi a edicao');
        }else{
             return false;
            // echo('nao foi a edicao');
        }
    

}



?>