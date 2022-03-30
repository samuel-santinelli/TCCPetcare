<?php

require_once("config/config.php");
require_once(SRC."bd/listarRaca.php");


function exibirRaca(){
    $dados = listarRaca();
    return $dados;
}


?>