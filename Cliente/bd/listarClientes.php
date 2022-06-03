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


  function buscaClienteId($idCliente){
   
    $sql = "select tblServico.*, tblClientes.*, tblPets.nome as nomePet, tblHost.nome as nomeHost, tblTipos.nomeTipo as nomeTipo from tblServico
    inner join tblPets
      on tblPets.idPet = tblServico.idPet inner join tblHost on tblHost.idHost = tblServico.idHost 
      inner join tblClientes on tblClientes.idCliente = tblServico.idCliente
      inner join tblTipos on tblTipos.idTipo = tblServico.idTipo
      where tblClientes.idCliente =".$idCliente;
  
    $conexao = conexao();
    // echo($sql);
    // die;
    $select = mysqli_query($conexao,$sql);
  
    return $select;
  }


  function buscarCliente($email)
{
    $sql= "select * from tblClientes
    where email = '".$email ."'";
    $conexao = conexao();
    $sqlQuery = mysqli_query($conexao,$sql);
    //$dado = mysqli_fetch_assoc($sqlQuery);
    $total = $sqlQuery->num_rows;


    return $total;
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