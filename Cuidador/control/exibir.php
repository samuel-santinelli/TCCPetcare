<?php


require_once(SRC. 'bd/listar.php');

function exibir(){
    $dadosListar = listar();
    return $dadosListar;
}



?>