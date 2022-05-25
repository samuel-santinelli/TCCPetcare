<?php

require_once('../bd/conexao.php');

function inserirPet($arrayPets){
    $sql = "insert into tblPets(
        nome,
        deficiencia,
        descricao,
        castrado,
        foto,
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

if($rs = mysqli_query($conexao,$sql)){
    $idPet =  mysqli_insert_id($conexao);
    // var_dump($idCliente, $sql);
    // die;
    $novoItem = array("id" => $idPet); 
  $arrayDados = $arrayPets + $novoItem;
// $arrayDados = array("id" => $idCliente,
//                   $arrayCliente  );
//   echo($sql);
// die;
//  var_dump($arrayDados);
//     die;
    return $arrayDados;
   
    // echo($idCliente);
    // die;
    // return true;
   
}else{
    return false;
}

// if(mysqli_query($conexao, $sql)){
//     return true;
// }
// else{
//     return false;
// }
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