<?php


require_once(SRC.'bd/conexao.php');

function listarAgenda(){

    $sql = "select *from tblServico ";

    $conexao = conexao();
    // echo($sql);
    // die;
    $select = mysqli_query($conexao, $sql);

    // if( $select = mysqli_query($conexao, $sql)){
      //    echo('selecao feita com sucesso');
    // }else{
     //    echo('erro no select');
    //}

    return $select;
}


function buscaAgendamento($idAgenda){
   
  $sql = "select tblServico.*, tblPets.idPet, tblClientes.idCliente, tblTipos.idTipo, tblHost.idHost from tblServico
  inner join tblPets
    on tblPets.idPet = tblServico.idPet
    inner join tblClientes on tblClientes.idCliente = tblServico.idCliente
    inner join tblTipos on tblTipos.idTipo = tblServico.idTipo
    inner join tblHost on tblHost.idHost = tblServico.idHost
    where tblServico.idServico =".$idAgenda;

  $conexao = conexao();
  // echo($sql);
  // die;
  $select = mysqli_query($conexao,$sql);

  return $select;
}



?>