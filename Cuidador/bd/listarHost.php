<?php

require_once(SRC.'bd/conexao.php');

function listarHost(){

    $sql = "select *from  tblHost";

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


?>