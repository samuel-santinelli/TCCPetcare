<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirPets.php');

function inserirPetsAPI($arrayDados){
    if(inserirPet($arrayDados)){
        return true;
    }else{
        return false;
    }
}


?>