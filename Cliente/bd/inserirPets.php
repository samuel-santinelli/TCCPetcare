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
        idRaca,
        idEspecie,
        idFase,
        idCliente,
        comportamento,
        idVacina
       
      
    )
    values(
        '".$arrayPets['nome']."',
        '".$arrayPets['deficiencia']."',
        '".$arrayPets['descricao']."',
        '".$arrayPets['castrado']."',
        '".$arrayPets['foto']."',
        '".$arrayPets['dataNascimento']."',
        '".$arrayPets['idRaca']."',
        '".$arrayPets['idEspecie']."',
        '".$arrayPets['idFase']."',
        '".$arrayPets['idCliente']."',
        '".$arrayPets['comportamento']."',
        '".$arrayPets['idVacina']."'

         )
";




$conexao = conexao();

// echo($sql);
// die;

if(mysqli_query($conexao, $sql)){
    return true;
}
else{
    return false;
}
// printf ( mysqli_insert_id($conexao));
// $idPet =  mysqli_insert_id($conexao);
// echo($idPet);
// echo($sql);
// die;

    //  return true;
    // return $idPet;
    // }else{
    //     return false;
    // }
 
}

?>