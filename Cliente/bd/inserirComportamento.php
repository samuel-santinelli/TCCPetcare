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
    
    if(mysqli_query($conexao, $sql)){
        return true;
    }
    else{
        return false;
    }
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