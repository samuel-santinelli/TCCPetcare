<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirRaca.php');

function inserirRacaAPI($arrayDados){
    if(inserirRaca($arrayDados)){
        return true;
    }else{
        return false;
    }
}


?>