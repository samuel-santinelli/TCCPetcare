<?php

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
// header('Access-Control-Allow-Headers: token, Content-Type');
// header('Access-Control-Max-Age: 1728000');
// header('Content-Length: 0');
// header('Content-Type: json/plain');
// die;
require_once("config/config.php");
require_once(SRC."bd/conexao.php");

$login = (string) null; 
$senha = (string) null;

$login = $_POST['login']; 
$senha = $_POST['senha']; 


if($login != "" && $senha != ""){ // 5 passo, fazendo o tratamento 
    $sql = "select *from tblClientes where email ='".$login."' and
    senha='".$senha."'";

    $conexao =  conexao(); //6 passo, chamando a funcao

    // echo($sql);
    // die;
    $select = mysqli_query($conexao,$sql);

   if($exibirUsuarios= mysqli_fetch_assoc($select)){
    session_start();

    $_SESSION['statusLogin'] = true;
    $_SESSION['nomeUsuario'] = $exibirUsuarios['nome'];
      header('location:indexPrincipal.php?nome="'.$login.'"');
    // echo('foi');
    }else{
        echo('login ou senha invalidos');
    }
}


?>