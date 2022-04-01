<?php
require_once(SRC.'bd/excluirCliente.php');

function excluirClienteApi($id) 
{

      
    if(excluir($id)){ 
         return true;
     
    }else{
        return false;
        
    }
       
    

}



?>