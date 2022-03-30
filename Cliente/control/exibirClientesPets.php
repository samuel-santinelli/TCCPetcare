<?php

require_once(SRC. 'bd/listarClientes.php');

function exibirClientes(){
    $dadosListar = listarClientes();
    return $dadosListar;
}

?>