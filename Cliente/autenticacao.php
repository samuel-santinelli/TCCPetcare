<?php

require_once("config/config.php");
require_once(SRC."bd/conexao.php");

$email = (string) null; 
$senha = (string) null;

$email = $_POST['email']; 
$senha = md5($_POST['senha']); 

function login($email, $senha){
    
if($email != "" && $senha != ""){ 
    $sql = "select *from tblClientes where email ='".$email."' and
    senha='".$senha."'";

    $conexao =  conexao(); 

    // echo($sql);
    // die;
    $select = mysqli_query($conexao,$sql);

   if($exibirCLientes= mysqli_fetch_assoc($select)){
    session_start(); 

    $_SESSION['statusLogin'] = true;
    $_SESSION['nome'] = $exibirCLientes['nome'];
      header('location:indexPrincipal.php');
    // echo('foi');
    }else{
        echo("Senha invalida");
    }
}
}

?>