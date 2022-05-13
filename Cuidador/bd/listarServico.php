<?php
// require_once("../config/config.php");
require_once(SRC.'bd/conexao.php');

function listarServico(){

    // $sql = "select tblServico.valor, tblServico.dataInicial, tblServico.dataFinal, tblHost.nome as nomeHost, tblHost.endereco, tblHost.foto, tblTipos.nomeTipo as nomeTipo from tblServico
    // inner join tblHost on tblHost.idHost = tblServico.idServico 
    //     inner join tblTipos on tblTipos.idTipo = tblServico.idTipo";
$sql = "select tblServico.idServico, tblHost.idHost, tblTipos.idTipo, tblClientes.idCliente from tblServico
inner join tblHost on tblHost.idHost = tblServico.idServico 
    inner join tblTipos on tblTipos.idTipo = tblServico.idTipo inner join tblClientes on tblClientes.idCliente = tblServico.idCliente";
    $conexao = conexao();
  // echo($sql);
  // die;
    $select = mysqli_query($conexao, $sql);

    // if( $select = mysqli_query($conexao, $sql)){
      //    echo('selecao feita com sucesso');
    // }else{
     //    echo('erro no select');
    //}

    return $select;
}


?>