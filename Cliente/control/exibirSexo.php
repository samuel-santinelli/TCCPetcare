<?php


require_once(SRC. 'bd/listarSexo.php');

function exibirSexo(){
    $dadosListar = listarSexo();
    return $dadosListar;
}


?>