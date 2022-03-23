<?php


require_once('../bd/inserirCliente.php');
require_once('../config/config.php');



$nome = (string) null;
$email = (string) null;
$senha = (string) null;
$confirmarSenha = (string) null;
$idSexo =  ( int )null;
$data = (string) null;



if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $nome = $_POST['inputNome'];
    $email = $_POST['inputEmail'];
    $data = $_POST['inputData'];
     $senha= md5($_POST['inputSenha']);
    $confirmarSenha = $_POST['inputConfirmarSenha'];
    $cpf = $_POST['inputCPF'];
    $idSexo = $_POST['sltSexo'];
 

    // $idSexoHost = $_POST['sltSexo'];




    if($nome == '' ||  $cpf == '' || $email == '' )
    {
        echo ("<script> 
            alert('Preencha todos os campos');
            window.history.back();
        </script>");  
    }
        
    elseif(strlen($nome)>100 || strlen($email) >15 || strlen($cpf) > 20)
        {
              echo ("<script> 
            alert('Maximo de caracter');
            window.history.back(); 
        </script>"); 
        }
        else{
        
            $cliente = array(
                "nome" => $nome,
                "cpf" => $cpf,
                "dataNascimento" => $data,
                "email" => $email,
               "senha" =>  $senha,
                "idSexo" => $idSexo

               
            
            );
          
           if (inserirCliente($cliente)) 
                echo ("
                    <script>
                        alert('foi inserido');
                        window.location.href = '../index.php';
                    </script>
                    " );
            else
                echo ("
                    <script>
                        alert('nao foi inserido');
                         window.history.back();
                    </script>
                ");
            
        }




}








?>

