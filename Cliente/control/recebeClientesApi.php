<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirCliente.php');

function inserirClienteAPI($arrayDados){
    if(inserirCliente($arrayDados)){
        return true;
    }else{
        return false;
    }
}


?>