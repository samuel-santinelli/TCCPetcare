<?php


require_once("config/config.php");
require_once(SRC."bd/listarEspecie.php");


function exibirEspecie(){
    $dados = listarEspecie();
    return $dados;
}

?>