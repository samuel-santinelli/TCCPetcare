<?php

require_once("../bd/conexao.php");

function excluirPet($idPet){
    $sql = "delete from tblPets
    where idPet =".$idPet; 


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