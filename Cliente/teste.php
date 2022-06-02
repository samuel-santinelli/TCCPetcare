<?php
require_once('../Cliente/config/config.php');
require_once(SRC.'
bd/conexao.php');
// require_once('../Cliente/config/config.php');


$erro = Array();
//$botaoEnviar = $_POST['btnEnviar'];

if(isset($_POST['btnEnviar'])){
    $email = $_POST['txtemail'];

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $erro[] = "Email inválido";
    }

    $sql= "select * from tblClientes
    where email = '".$email ."'";
    $conexao = conexao();
    $sqlQuery = mysqli_query($conexao,$sql) or die($mysqli->error);
    $dado = mysqli_fetch_assoc($sqlQuery);
    $total = $sqlQuery->num_rows;

    if($total == 0)
    $erro[] = "email informado nao exite no banco";

    if(count($erro) == 0 && $total > 0){ 
        //senha que sera enviada por email para o usuario
        $novaSenha = substr(md5(time()),0, 6);
        // senha que sera alterada no banco de dados
         $novaSenhaCriptografada = $novaSenha;

// Caminho da biblioteca PHPMailer
require '../PHPMailer/PHPMailerAutoload.php';

// Instância do objeto PHPMailer
$mail = new PHPMailer;

// Configura para envio de e-mails usando SMTP
$mail->isSMTP();

// Servidor SMTP
$mail->Host = 'smtp.gmail.com';

// Usar autenticação SMTP
$mail->SMTPAuth = true;

// Usuário da conta
$mail->Username = 'petCare.php@gmail.com';

// Senha da conta
$mail->Password = 'tcc.2022';

// Tipo de encriptação que será usado na conexão SMTP
$mail->SMTPSecure = 'tls'; //se nao der cert:ssl

// Porta do servidor SMTP
$mail->Port = 587;

// Informa se vamos enviar mensagens usando HTML
$mail->IsHTML(true);

// Email do Remetente
$mail->From = 'petCare.php@gmail.com';

// Nome do Remetente
$mail->FromName = 'PetCare';

// Endereço do e-mail do destinatário
$mail->addAddress($email);

// Assunto do e-mail
$mail->Subject = 'Recuperaçao de senha';

// Mensagem que vai no corpo do e-mail
$mail->Body = '<h3>sua senha é:</h3> '.$novaSenha;

$mailSend = mail($mail->addAddress,$mail->Subject,$mail->Body);

if($mail->Send()):
    echo 'Enviado com sucesso !';
else:
   echo 'Erro ao enviar Email:' . $mail->ErrorInfo;
endif; 
        if($mailSend){
            
           $sqlCode = "UPDATE tblClientes SET senha = '$novaSenhaCriptografada' where email='$email'";
            // echo($sqlCode);
            // die;
            $sqlQuery = mysqli_query($conexao,$sqlCode);
            
            if($sqlQuery)
                echo("senha alterada no banco");

            // Envia o e-mail e captura o sucesso ou erro
          

            
        }
    }
    


}
echo substr(md5(time()),0, 6);