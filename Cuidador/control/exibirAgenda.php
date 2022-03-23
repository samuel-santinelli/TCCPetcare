<?php


require_once(SRC. 'bd/listarAgenda.php');

function exibirAgenda(){
    $dadosListar = listarAgenda();
    return $dadosListar;
}



?>