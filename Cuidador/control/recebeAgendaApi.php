<?php

require_once('../config/config.php');


require_once(SRC.'bd/inserirAgendamento.php');
require_once(SRC. 'bd/updateAgendamento.php');

function inserirAgendaApi($arrayDados) 
{
       
    // var_dump(inserir());
    // die;
    if(inserirAgenda($arrayDados)){
        return true;
    }else{
        return false;
    }
       
    

}
function atualizarAgendamentoAPI($arrayDados, $id){
    
    
    $novoItem = array("id" => $id); 

   
    $arrayAgendamento = $arrayDados + $novoItem;

  
       
    if(editaAgendamento($arrayAgendamento)){ 
        return true;
    }else{
        return false;
    }
       
    
}
?>