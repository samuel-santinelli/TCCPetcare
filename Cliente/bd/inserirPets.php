<?php

require_once('../bd/conexao.php');

function inserirPet($arrayPets){
    $sql = "insert into tblPets(
        nome,
        deficiencia,
        descricao,
        castrado,
        foto,
        dataNascimento,
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
        '".$arrayPets['dataNascimento']."',
        '".$arrayPets['avaliacao']."',
        '".$arrayPets['idRaca']."',
        '".$arrayPets['idEspecie']."',
        '".$arrayPets['idFase']."',
        '".$arrayPets['idCliente']."'

         )
";




$conexao = conexao();



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
 
}

?>