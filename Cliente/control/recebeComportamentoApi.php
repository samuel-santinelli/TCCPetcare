<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirComportamento.php');

function inserirComportamentoAPI($arrayDados){
    if(inserirComportamento($arrayDados)){
        return true;
    }else{
        return false;
    }
}


?>