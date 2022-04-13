<?php

// require_once("config/config.php");
require_once(SRC."bd/conexao.php");

function listarPetVacina(){
    // $sql = "select tblPets.idPet, tblPetsVacinas.idPetVacina,  tblVacinas.idVacina from tblPetsVacinas
    // inner join tblPets
    //   // on tblPets.idPet = tblPetsVacinas.idPet inner join tblVacinas on tblVacinas.idVacina = tblPetsVacinas.idVacina";
  $sql = "select tblPets.*, tblPetsVacinas.* from tblPetsVacinas
  inner join tblPets
   on tblPets.idPet = tblPetsVacinas.idPet";
    $conexao = conexao();


    $selecao = mysqli_query($conexao, $sql);

    return $selecao;
}


// function buscaVacina($idCliente){
   
//     $sql = "select tblClientes.*, tblSexo.* from tblClientes
//     inner join tblSexo
//       on tblSexo.idSexo = tblClientes.idSexo
//       where tblClientes.idCliente =".$idCliente;
  
//     $conexao = conexao();
//     // echo($sql);
//     // die;
//     $select = mysqli_query($conexao,$sql);
  
//     return $select;
//   }


?>