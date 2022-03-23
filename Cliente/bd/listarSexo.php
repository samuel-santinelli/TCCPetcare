<?php

require_once(SRC.'bd/conexao.php');

function listarSexo(){

    $sql = "select *from  tblSexo";

    $conexao = conexao();

    $select = mysqli_query($conexao, $sql);

    return $select;
}



?>