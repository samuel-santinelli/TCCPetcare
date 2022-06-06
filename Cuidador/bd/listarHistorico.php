<?php
// require_once("../config/config.php");
require_once(SRC.'bd/conexao.php');

function listarHistorico(){

  $sql = "select tblServico.*, tblTipos.nomeTipo as nomeTipo, tblPets.idPet as nomePet, tblHost.idHost as nomeHost  from tblServico
  inner join tblPets
    on tblPets.idPet = tblServico.idPet inner join tblHost on tblHost.idHost = tblServico.idServico 
    inner join tblTipos on tblTipos.idTipo = tblServico.idTipo";

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


?>