<?php

// require_once("config/config.php");
require_once(SRC."bd/conexao.php");

function listarFase(){
    $sql = "select *from tblFases";

    $conexao = conexao();


    $selecao = mysqli_query($conexao, $sql);

    return $selecao;
}



?>