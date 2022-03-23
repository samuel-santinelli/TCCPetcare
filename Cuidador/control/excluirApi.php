<?php
require_once(SRC.'bd/excluir.php');

function excluirCuidadorApi($id) 
{

      
    if(excluir($id)){ 
         return true;
     
    }else{
        return false;
        
    }
       
    

}



?>