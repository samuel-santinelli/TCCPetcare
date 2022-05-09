<?php
// require_once("../config/config.php");
require_once(SRC.'bd/conexao.php');

function listarHistorico(){

    $sql = "select tblServico.valor, tblServico.dataInicial, tblServico.dataFinal, tblPets.nome as nomePet, tblPets.foto,tblPets.idEspecie , tblTipos.nomeTipo as nomeTipo from tblServico
    inner join tblPets
      on tblPets.idPet = tblServico.idPet inner join tblHost on tblHost.idHost = tblServico.idServico 
      inner join tblTipos on tblTipos.idTipo = tblServico.idTipo";

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