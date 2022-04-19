<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirComportamentoPet.php');

function inserirComportamentoAPI($arrayDados){
    if(inserirPetComportamento($arrayDados)){
        return true;
    }else{
        return false;
    }
}


?>