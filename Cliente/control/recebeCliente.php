<?php


require_once('../bd/inserirCliente.php');
require_once('../config/config.php');
require_once(SRC.'config/upload.php');


$nome = (string) null;
$email = (string) null;
$senha = (string) null;
$confirmarSenha = (string) null;
$idSexo =  ( int )null;
$data = (string) null;
$telefone = (string) null;
$foto = (string) null;

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $nome = $_POST['inputNome'];
    $email = $_POST['inputEmail'];
    $data = $_POST['inputData'];
     $senha= md5($_POST['inputSenha']);
    $confirmarSenha = $_POST['inputConfirmarSenha'];
    $cpf = $_POST['inputCPF'];
    $telefone = $_POST['telefone'];
    $idSexo = $_POST['sltSexo'];
    $nomeFoto = $_GET['nomeFoto']; 

  
    if($_FILES['fleFoto'] ['name'] != "") 
        {
             $foto = uploadFile($_FILES['fleFoto']); 
             unlink(SRC.NOME_DIRETORIO_FILE.$nomeFoto ); 
             //  echo($foto);
        }else{
            $foto = $nomeFoto;
        }



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
                "foto" => $foto,
                "email" => $email,
               "senha" =>  $senha,
                "idSexo" => $idSexo,
                "telefone" => $telefone

               
            
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

