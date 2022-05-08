<?php
require_once(SRC."bd/conexao.php");

function listarComportamentoPet(){
    $sql = "select *from tblTeste";

    $conexao = conexao();


    $selecao = mysqli_query($conexao, $sql);

    return $selecao;
}

?>