<?php

require_once('../config/config.php');


require_once(SRC.'bd/inserirAgendamento.php');


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

?>