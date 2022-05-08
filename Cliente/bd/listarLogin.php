<?php

// require_once("../config/config.php");
require_once(SRC.'bd/conexao.php');
// if($_SERVER['REQUEST_METHOD'] == 'POST'){

function listarLogin($login, $senha){
//     $login = $_POST['login']; 
// $senha = $_POST['senha'];

    $sql = "select *from tblClientes where email ='".$login."' and
    senha='".$senha."'";

    $conexao =  conexao(); //6 passo, chamando a funcao

    // echo($sql);
    // die;
    $select = mysqli_query($conexao,$sql);
    

    return $select;
}
// }

function buscaLogin($login, $senha){
    //script
    $sql = "select *from tblClientes where email ='".$login."' and
    senha='".$senha."'";
 //9 passo, arrumar o select, retorna a sigla do estado, like no lugar do =


//abre a conexão com o banco de dados
$conexao = conexao();
// echo($sql);
// die;
   // solicita ao banco de dados a execução do script SQL
//criando uma variavel para receber os dados do bd
$select =  mysqli_query($conexao, $sql);

return $select;
}



?>