<?php

// require_once("config/config.php");
require_once(SRC."bd/conexao.php");

function listarVacinas(){
    $sql = "select *from tblVacinas";

    $conexao = conexao();


    $selecao = mysqli_query($conexao, $sql);

    return $selecao;
}


// function buscaVacina($idCliente){
   
//     $sql = "select tblClientes.*, tblSexo.* from tblClientes
//     inner join tblSexo
//       on tblSexo.idSexo = tblClientes.idSexo
//       where tblClientes.idCliente =".$idCliente;
  
//     $conexao = conexao();
//     // echo($sql);
//     // die;
//     $select = mysqli_query($conexao,$sql);
  
//     return $select;
//   }


?>