<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirPets.php');
require_once(SRC. 'bd/updatePet.php');

function inserirPetsAPI($arrayDados){
    
    if($resposta = inserirPet($arrayDados)){
        $resposta =  json_encode($resposta);
            // var_dump($resposta);
            // die;
            return $resposta;
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