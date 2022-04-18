<?php

require_once("../config/config.php");
require_once(SRC."bd/conexao.php");


function inserirVacinaPet($arrayVacinaPet, $idPet){
    $sql = "insert into tblPetsVacinas 
    (
        idPet,
        idVacina
        )
    values(
        $idPet,
        '".$arrayVacinaPet['idVacina']."'
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