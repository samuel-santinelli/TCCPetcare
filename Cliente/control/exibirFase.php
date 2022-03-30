<?php


require_once("config/config.php");
require_once(SRC."bd/listarFase.php");


function exibirFase(){
    $dados = listarFase();
    return $dados;
}

?>