<?php

// require_once("config/config.php");
require_once(SRC."bd/conexao.php");

function listarRaca(){
    $sql = "select *from tblRacas";

    $conexao = conexao();


    $selecao = mysqli_query($conexao, $sql);

    return $selecao;
}



?>