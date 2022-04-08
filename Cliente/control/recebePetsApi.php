<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirPets.php');
require_once(SRC. 'bd/updatePet.php');
function inserirPetsAPI($arrayDados){
    if(inserirPet($arrayDados)){
        return true;
    }else{
        return false;
    }
}

function atualizarPetAPI($arrayDados, $id){
    
    
    $novoItem = array("id" => $id); 

   
    $arrayPet = $arrayDados + $novoItem;

  
       
    if(editaPet($arrayPet)){ 
        return true;
    }else{
        return false;
    }
       
    
}

?>