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



?>