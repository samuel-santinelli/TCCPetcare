<?php

require_once("config/config.php");
require_once(SRC."bd/listarPorte.php");


function exibirPorte(){
    $dados = listarPorte();
    return $dados;
}


?>
