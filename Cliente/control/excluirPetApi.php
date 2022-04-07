<?php
require_once(SRC.'bd/excluirPet.php');

function excluirPetApi($id) 
{

      
    if(excluirPet($id)){ 
         return true;
     
    }else{
        return false;
        
    }
       
    

}



?>