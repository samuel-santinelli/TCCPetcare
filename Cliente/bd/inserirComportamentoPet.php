<?php

require_once("../config/config.php");
require_once(SRC."bd/conexao.php");


function inserirPetComportamento($arrayPetsComportamentos ){
    $sql = "insert into tblPetsComportamento 
    (
        idPet,
        idComportamento
        )
    values(
        '".$arrayPetsComportamentos['idPet']."',
        '".$arrayPetsComportamentos['idComportamento']."'
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