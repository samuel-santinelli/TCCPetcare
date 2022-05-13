<?php

// require_once('config/config.php');
require_once(SRC.'bd/inserirCliente.php');
require_once(SRC. 'bd/updateCliente.php');

function inserirClienteAPI($arrayDados){
    if(inserirCliente($arrayDados)){
        return true;
    }else{
        return false;
    }
}

function atualizarClienteAPI($arrayDados, $id){
    
    
    $novoItem = array("id" => $id); 

   
    $arrayCuidador = $arrayDados + $novoItem;

  
       
    if(editaCliente($arrayCuidador)){ 
        return true;
    }else{
        return false;
    }
       
    
}
function atualizarSenhaAPI($novaSenhaCriptografada,$email){
    
    
    $novoItem = array("email" => $email); 

   
    $arrayClienteSenha = array("senha" =>$novaSenhaCriptografada);

  
       
    if(editar($arrayClienteSenha,$novoItem)){ 
        return true;
    }else{
        return false;
    }
       
    
}
?>