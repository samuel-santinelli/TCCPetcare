<?php

require_once('../bd/conexao.php');

function inserirVacinas($arrayVacinas){
    $sql = "insert into tblVacinas(
        nomeVacina
       
      )
        values(
            '".$arrayVacinas['nome']."'
    
             )
";




$conexao = conexao();

// echo($sql);
// die;

if($resultado = mysqli_query($conexao, $sql)){
     return true;
    
    }else{
        return false;
    }

}
?>