<?php


require_once(SRC. 'bd/listarTipoServico.php');

function exibirTiposServicos(){
    $dadosListar = listarTiposServicos();
    return $dadosListar;
}



?>