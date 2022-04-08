<?php

require_once('../bd/conexao.php');

function editaPet($arrayPet)
{
    $sql = "update tblPets set 
            nome = '".$arrayPet['nome']."',
            deficiencia =  '".$arrayPet['deficiencia']."',
            descricao =  '".$arrayPet['descricao']."',
            castrado = '".$arrayPet['castrado']."',
            foto = '".$arrayPet['foto']."',
            dataNascimento = '".$arrayPet['dataNascimento']."',
            avaliacao = '".$arrayPet['avaliacao']."',
            idRaca = ".$arrayPet['idRaca'].",
            idEspecie = ".$arrayPet['idEspecie'].",
            idFase = ".$arrayPet['idFase'].",
            idCliente = ".$arrayPet['idCliente']."
    
        where idPet= ".$arrayPet['id'];
        $conexao = conexao();
       
// echo($sql);
//     die;

        if(mysqli_query($conexao,$sql)){
             return true;
            // echo('foi a edicao');
        }else{
             return false;
            // echo('nao foi a edicao');
        }
    

}



?>