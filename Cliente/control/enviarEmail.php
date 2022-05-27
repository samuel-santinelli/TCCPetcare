<?php

require_once('../api/vendor/autoload.php');


function enviarEmail ($email, $novaSenha)
{


    
    // Caminho da biblioteca PHPMailer
    //require_once ('C:\xampp\htdocs\Cuidador\Cliente\PHPMailer/class.phpmailer.php');





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

    if($mailSend)
        return true;
    else
        return false;

}
?>