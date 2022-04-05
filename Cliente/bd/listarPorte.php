<?php

require_once("config/config.php");
require_once(SRC."bd/conexao.php");

function listarPorte(){
    $sql = "select *from tblPortes";

    $conexao = conexao();


    $selecao = mysqli_query($conexao, $sql);

    return $selecao;
}



?>