<?php

echo('sdhfgdsjgfjgdsjfgjsgjfgjhds' );
die;

require_once('./bd/conexao.php');
require_once('./bd/updateCliente.php');
require_once('./control/recebeClientesApi.php');
require_once('./bd/listarClientes.php');

$erro = Array();
//$botaoEnviar = $_POST['btnEnviar'];

//if(isset($_POST['btnEnviar'])){
  //  $email = $_POST['txtemail'];
if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $erro[] = "Email inválido";
}
if(buscarCliente($total == 0))
    $erro[] = "email informado nao exite no banco";
 elseif(count($erro) == 0 && $total > 0){   
     //senha que sera enviada por email para o usuario
    $novaSenha = substr(md5(time()),0, 6);
    // senha que sera alterada no banco de dados
    $novaSenhaCriptografada = $novaSenha;
    }



if(atualizarSenhaAPI($novaSenhaCriptografada,$email)){
    require_once('./control/enviarEmail.php');
    if($mail->Send())
         echo 'Enviado com sucesso !';
    else
         echo 'Erro ao enviar Email:' . $mail->ErrorInfo;
 
        //if($mailSend)
            
           //editar($email, $novaSenhaCriptografada);

}
    
    


           
      
    
//echo substr(md5(time()),0, 6);

?>