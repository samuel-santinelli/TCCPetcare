<?php

require_once(SRC.'bd/conexao.php');

function listarClientes(){

    $sql = "select *from  tblClientes order by idcliente desc";

    $conexao = conexao();

    $select = mysqli_query($conexao, $sql);

    return $select;
}


function buscaCliente($idCliente){
   
    $sql = "select tblClientes.*, tblSexo.* from tblClientes
    inner join tblSexo
      on tblSexo.idSexo = tblClientes.idSexo
      where tblClientes.idCliente =".$idCliente;
  
    $conexao = conexao();
    // echo($sql);
    // die;
    $select = mysqli_query($conexao,$sql);
  
    return $select;
  }
  function buscaClientePet($idPet){
   
    $sql = "select tblPets.idPet, tblClientes.idCliente from tblPets 
    inner join tblClientes on tblClientes.idCliente = tblPets.idCliente
    where tblPets.idPet =".$idPet;
  
    $conexao = conexao();
    // echo($sql);
    // die;
    $select = mysqli_query($conexao,$sql);
  
    return $select;
  }
?>