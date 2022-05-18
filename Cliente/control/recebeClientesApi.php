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
// function inserirClienteAPI($arrayDados, $idCliente){
    
//     $novoItem = array("id" => $idCliente); 

   
//     $arrayCliente = $arrayDados + $novoItem;

   
       
//     if(inserirCliente($arrayCliente)){ 
//         var_dump($arrayCliente);
//         die;
//         return true;
//     }else{
//         return false;
//     }
// }
function inserirClienteAPI($arrayDados) 
{
       
    // var_dump(inserirCliente($arrayDados));
    // die;
    if($resposta = inserirCliente($arrayDados)){
    $resposta =  json_encode($resposta);
        // var_dump($resposta);
        // die;
        return $resposta;
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