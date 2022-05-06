<?php


function conexao(){
    $servidor = 'localhost:3306';
    $usuario = 'root';
    $senha = '12345678';
    $database = 'dbPetscare';
  

   if( $conexao = mysqli_connect($servidor, $usuario, $senha, $database)){
       //echo('Foi a conexao');
    return $conexao;
   }else{
       //echo('não foi');
       return false;
   }



}





?>