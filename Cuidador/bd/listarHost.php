<?php

require_once(SRC.'bd/conexao.php');

function listarHost(){

    $sql = "select *from  tblHost order by idHost desc";

    $conexao = conexao();

    $select = mysqli_query($conexao, $sql);

    // if( $select = mysqli_query($conexao, $sql)){
      //    echo('selecao feita com sucesso');
    // }else{
     //    echo('erro no select');
    //}

    return $select;
}

function busca($idCuidador){
   
  $sql = "select tblHost.*, tblSexoHost.* from tblHost
  inner join tblSexoHost
    on tblSexoHost.idSexoHost = tblHost.idSexoHost
    where tblHost.idHost =".$idCuidador;

  $conexao = conexao();
  // echo($sql);
  // die;
  $select = mysqli_query($conexao,$sql);

  return $select;
}

function buscarNome($nome){
  //script
  $sql = "select * from tblHost where tblHost.nome like '%".$nome."%'";



$conexao = conexao();


$select =  mysqli_query($conexao, $sql);

return $select;
}


function buscaHost($idHost){
   
  $sql = "select tblHost.idHost, tblSexoHost.idSexoHost from tblHost 
  inner join tblSexoHost on tblSexoHost.idSexoHost = tblHost.idSexoHost
  where tblHost.idHost =".$idHost;

  $conexao = conexao();
  // echo($sql);
  // die;
  $select = mysqli_query($conexao,$sql);

  return $select;
}

function buscarCuidador($idHost){
   
  $sql = "select tblHost.*, tblSexoHost.idSexoHost from tblHost 
  inner join tblSexoHost on tblSexoHost.idSexoHost = tblHost.idSexoHost
  where tblHost.idHost =".$idHost;

  $conexao = conexao();
  // echo($sql);
  // die;
  $select = mysqli_query($conexao,$sql);

  return $select;
}


function buscaHostId($idHost){
   
  $sql = "select tblServico.*, tblClientes.*, tblPets.nome as nomePet, tblHost.nome as nomeHost, tblTipos.nomeTipo as nomeTipo from tblServico
  inner join tblPets
    on tblPets.idPet = tblServico.idPet inner join tblHost on tblHost.idHost = tblServico.idHost 
    inner join tblClientes on tblClientes.idCliente = tblServico.idCliente
    inner join tblTipos on tblTipos.idTipo = tblServico.idTipo
    where tblHost.idHost =".$idHost;

  $conexao = conexao();
  // echo($sql);
  // die;
  $select = mysqli_query($conexao,$sql);

  return $select;
}

?>