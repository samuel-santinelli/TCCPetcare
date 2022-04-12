<?php

// require_once("../config/config.php");
require_once(SRC."bd/conexao.php");

function listarPets(){
    $sql = " select tblPets.*, tblPetsVacinas.idPetVacina,  tblVacinas.idVacina from tblPetsVacinas
    inner join tblPets
      on tblPets.idPet = tblPetsVacinas.idPet inner join tblVacinas on tblVacinas.idVacina = tblPetsVacinas.idVacina";

    $conexao = conexao();


    $selecao = mysqli_query($conexao, $sql);

    return $selecao;

}
function buscaPet($idPet){
   
    $sql = "select tblPets.* from tblPets
    inner join tblEspecies
      on tblEspecies.idEspecie = tblPets.idEspecie inner join tblRacas on tblRacas.idRaca = tblPets.idRaca 
      inner join tblFases on tblFases.idFase = tblPets.idFase 
      inner join tblClientes on tblClientes.idCliente = tblPets.idCliente
      where tblPets.idPet =".$idPet;
    
    $conexao = conexao();
    // echo($sql);
    // die;
    $select = mysqli_query($conexao,$sql);
  
    return $select;
  }
// function busca($nome){
//     $sql ="select tblPets.nome, tblClientes.nome from tblPets
// 	inner join tblClientes
//     on tblClientes.idCliente = tblPets.idCliente
//     where tblPets.nome like  '%".$nome."%'"; 

    

//     $conexao = conexao();

//     $select = mysqli_query($conexao,$sql);

//     return $select;
// }

?>