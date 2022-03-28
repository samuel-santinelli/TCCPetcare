<?php

require_once("../bd/conexao.php");

function inserirPet($arrayPets){
    $sql = "insert into tblPets 
    (
        nome,
        deficiencia,
        descricao,
        castrado,
        foto,
        avaliacao,
        idRaca,
        idEspecie,
        idFase,
        idCliente
        )
    values(
        '".$arrayPets['nome']."',
        '".$arrayPets['deficiencia']."',
        '".$arrayPets['descricao']."',
        '".$arrayPets['castrado']."',
        '".$arrayPets['foto']."',
        ".$arrayPets['avaliacao'].",
        ".$arrayPets['idRaca'].",
        ".$arrayPets['idEspecie'].",
        ".$arrayPets['idFase'].",
        ".$arrayPets['idCliente']."
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