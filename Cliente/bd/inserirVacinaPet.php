<?php

require_once("../config/config.php");
require_once(SRC."bd/conexao.php");

function inserirVacinaPet($arrayVacinaPet){
    $sql = "insert into tblPetsVacinas 
    (
        idVacina
        )
    values(
        '".$arrayVacinaPet['idVacina']."'
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