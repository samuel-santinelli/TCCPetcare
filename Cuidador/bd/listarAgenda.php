<?php


require_once(SRC.'bd/conexao.php');

function listarAgenda(){

    $sql = "select *from tblAgendaHost ";

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