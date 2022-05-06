<?php
// require_once("../config/config.php");
require_once(SRC.'bd/conexao.php');

function listar(){

    $sql = "select *from  tblSexoHost";

    $conexao = conexao();

    $select = mysqli_query($conexao, $sql);

    // if( $select = mysqli_query($conexao, $sql)){
      //    echo('selecao feita com sucesso');
    // }else{
     //    echo('erro no select');
    //}

    return $select;
}


?>