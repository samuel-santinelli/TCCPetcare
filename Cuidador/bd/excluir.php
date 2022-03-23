<?php

require_once("../bd/conexao.php");

function excluir($idCuidador){
    $sql = "delete from tblHost
    where idHost =".$idCuidador; 


$conexao = conexao();
//echo($sql);
//die;

if($resultado = mysqli_query($conexao, $sql)){
    // echo(" foi no bd //");
    return true;
}else{
    // echo("nao foi no bd //");
    return false;
}


}
?>