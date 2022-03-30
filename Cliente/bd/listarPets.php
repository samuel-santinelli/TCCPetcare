<?php

require_once("../config/config.php");
require_once(SRC."bd/conexo.php");

function listarPets(){
    $sql = "select *from tblPets";

    $conexao = conexao();


    $selecao = mysqli_query($conexao, $sql);

    return $selecao;

}

// function busca($nome){
//     $sql ="select tblPets.nome, tblClientes.nome from tblPets
// 	inner join tblClientes
//     on tblClientes.idCliente = tblPets.idCliente
//     where tblPets.nome like  '%".$nome."%'"; 

    

//     $conexao = conexao();

//     $select = mysqli_query($conexao,$sql);

//     return $select;
// }

?>