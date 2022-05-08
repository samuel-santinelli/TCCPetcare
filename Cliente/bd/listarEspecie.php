<?php

// require_once("config/config.php");
require_once(SRC."bd/conexao.php");

function listarEspecie(){
    $sql = "select *from tblEspecies";

    $conexao = conexao();


    $selecao = mysqli_query($conexao, $sql);

    return $selecao;
}



?>