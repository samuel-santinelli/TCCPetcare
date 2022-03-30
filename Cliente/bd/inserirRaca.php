<?php

require_once("config/config.php");
require_once(SRC."bd/conexao.php");

function inseriRaca($arrayRacas){
    $sql = "insert into tblRacas 
    (
        nome
        )
    values(
        '".$arrayRacasS['nomeRaca']."'
    )";

        $conexao = conexao();

        if(mysqli_query($conexao, $sql)){
            // echo('Foi inserido');
            return true;
        }else{
            // echo('Nao foi inserido');
            return false;
        }
}



?>