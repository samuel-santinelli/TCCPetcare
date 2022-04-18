<?php

require_once("../config/config.php");
require_once(SRC."bd/conexao.php");

function inserirComportamento($arrayComportamento){
    $sql = "insert into tblTeste 
    (
        docil,
        temperamental,
        sistematico,
        antissocial,
        ciumento,
        acanhoso,
        guloso,
        bravo
        )
    values(
        '".$arrayComportamento['docil']."',
        '".$arrayComportamento['temperamental']."',
        '".$arrayComportamento['sistematico']."',
        '".$arrayComportamento['antissocial']."',
        '".$arrayComportamento['ciumento']."',
        '".$arrayComportamento['acanhoso']."',
        '".$arrayComportamento['guloso']."',
        '".$arrayComportamento['bravo']."'
    )";

        $conexao = conexao();
// echo($sql);
// die;


mysqli_query($conexao, $sql);
// printf ( mysqli_insert_id($conexao));
// $idPet =  mysqli_insert_id($conexao);
// echo($idPet);
// echo($sql);
// die;

     return true;
    // return $idPet;
    // }else{
    //     return false;
    // }


        // if(mysqli_query($conexao, $sql)){
        //     // echo('Foi inserido');
        //     return true;
        // }else{
        //     // echo('Nao foi inserido');
        //     return false;
        // }
}



?>