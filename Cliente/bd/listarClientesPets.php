<?php

require_once(SRC.'bd/conexao.php');


function listarClientes(){

    $sql = "select *from  tblClientes";

    $conexao = conexao();

    $select = mysqli_query($conexao, $sql);

    return $select;
}

?>