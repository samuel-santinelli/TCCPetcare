<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirVacinas.php');

function inserirVacinasAPI($arrayDados){
    if(inserirVacinaPet($arrayDados)){
        return true;
    }else{
        return false;
    }
}


?>