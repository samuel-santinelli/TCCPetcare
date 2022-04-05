<?php

require_once("../config/config.php");
require_once(SRC."bd/conexao.php");

function inserirRaca($arrayRacas){
    $sql = "insert into tblRacas 
    (
        nomeRaca,
        idPorte
        )
    values(
        '".$arrayRacas['nome']."',
        ".$arrayRacas['idPorte']."
    )";

        $conexao = conexao();

        // echo($sql);
        // die;
        if(mysqli_query($conexao, $sql)){
            // echo('Foi inserido');
            return true;
        }else{
            // echo('Nao foi inserido');
            return false;
        }
}



?>