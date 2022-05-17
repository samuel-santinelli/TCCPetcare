<?php

// require_once('config/config.php');
require_once(SRC.'bd/inserirCliente.php');
require_once(SRC. 'bd/updateCliente.php');
// require_once(SRC.'bd/listarClientes.php');
// $idCliente =(int) 0;
// $idCliente = $_GET['idCliente'];

// // $idCliente= $_GET['idCliente'];
//   echo ($idCliente);

//   $dados= buscaCliente($idCliente); 
function inserirClienteAPI($arrayDados, $idCliente){
    if(inserirCliente($arrayDados, $idCliente)){
        // var_dump($arrayDados, $idCliente);
        // die;
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