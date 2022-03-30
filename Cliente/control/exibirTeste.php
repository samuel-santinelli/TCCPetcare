<?php

require_once(SRC. 'bd/listarTeste.php');

function exibirClientePets(){
    $dadosListar = listarClientePets();
    return $dadosListar;
}

?>