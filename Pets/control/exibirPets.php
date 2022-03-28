<?php

require_once("config/config.php");
require_once(SRC."bd/listarPets.php");


function exibirPets(){
    $dados = listarPets();
    return $dados;
}


?>