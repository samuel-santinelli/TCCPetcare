<?php

require_once("../config/config.php");
require_once(SRC."bd/conexo.php");

function listarPets(){
    $sql = "select *from tblPets";

    $conexao = conexao();


    $selecao = mysqli_query($conexao, $sql);

    return $selecao;

}



?>