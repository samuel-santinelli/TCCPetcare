<?php

require_once('../bd/conexao.php');

function editaAgendamento($arrayAgendamento)
{
    $sql = "update tblServico set 
            status = '".$arrayAgendamento['status']."'
    
        where idServico= ".$arrayAgendamento['id'];
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