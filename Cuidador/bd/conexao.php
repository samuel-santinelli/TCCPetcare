<?php


function conexao(){
    $servidor = 'localhost';
    $usuario = 'root';
    $senha = 'bcd127';
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