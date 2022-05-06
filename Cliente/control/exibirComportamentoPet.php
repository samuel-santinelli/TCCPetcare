<?php

require_once(SRC."bd/listarComportamentoPet.php");


function exibirComportamentoPet(){
    $dados = listarComportamentoPet();
    return $dados;
}
function buscaComportamentoPet($idComportamentoPet){
   
    $sql = "select * from tblTeste where tblTeste.idComportamento = ".$idComportamentoPet;

    $conexao = conexao();

    $select = mysqli_query($conexao,$sql);

    return $select;
}

?>