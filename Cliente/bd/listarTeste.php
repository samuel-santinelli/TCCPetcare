<?php

require_once(SRC.'bd/conexao.php');

function listarClientePets(){

    $sql = "select *from tblTeste";

    $conexao = conexao();

    $select = mysqli_query($conexao, $sql);

    return $select;
}


?>