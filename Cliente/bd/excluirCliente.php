<?php

require_once("../bd/conexao.php");

function excluir($idCliente){
    $sql = "delete from tblClientes
    where idCliente =".$idCliente; 


$conexao = conexao();
// echo($sql);
// die;

if($resultado = mysqli_query($conexao, $sql)){
    // echo(" foi no bd //");
    return true;
}else{
    // echo("nao foi no bd //");
    return false;
}


}
?>