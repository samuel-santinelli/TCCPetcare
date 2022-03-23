<?php

require_once('../config/config.php');


require_once(SRC.'bd/inserir.php');
require_once(SRC. 'bd/update.php');

function inserirCuidadorAPI($arrayDados) 
{
       
    // var_dump(inserir());
    // die;
    if(inserir($arrayDados)){
        return true;
    }else{
        return false;
    }
       
    

}


function atualizarAPI($arrayDados, $id){
    
    
    $novoItem = array("id" => $id); 

   
    $arrayCuidador = $arrayDados + $novoItem;

  
       
    if(edita($arrayCuidador)){ 
        return true;
    }else{
        return false;
    }
       
    
}

?>