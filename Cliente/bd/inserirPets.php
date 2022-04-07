<?php

require_once('../bd/conexao.php');

function inserirPet($arrayPets){
    $sql = "insert into tblPets(
        nome,
        deficiencia,
        descricao,
        castrado,
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
        '".$arrayPets['dataNascimento']."',
        '".$arrayPets['avaliacao']."',
        '".$arrayPets['idRaca']."',
        '".$arrayPets['idEspecie']."',
        '".$arrayPets['idFase']."',
        '".$arrayPets['idCliente']."'

         )
";




$conexao = conexao();

// echo($sql);
// die;

if($resultado = mysqli_query($conexao, $sql)){
     return true;
    
    }else{
        return false;
    }

}
?>