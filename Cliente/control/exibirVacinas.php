<?php


require_once(SRC. 'bd/listarVacinas.php');

function exibirVacinas(){
    $dadosListar = listarVacinas();
    return $dadosListar;
}

function buscaVacina($idVacina){
   
    $sql = "select * from tblVacinas where tblVacinas.idVacina = ".$idVacina;

    $conexao = conexao();

    $select = mysqli_query($conexao,$sql);

    return $select;
}
?>