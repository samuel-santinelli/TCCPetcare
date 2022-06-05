<?php
 
 require_once('../bd/conexao.php');







 function inserirAgenda($arrayAgenda){
  
     $sql = "insert into tblServico(
             valor,
             dataInicial,
             dataFinal,
             idHost,
             idPet,
             idTipo,
             idCliente,
             nome,
             cpf,
             endereco,
             status
           

           
         )
         values(
             '".$arrayAgenda['valor']."',
             '".$arrayAgenda['dataInicial']."',
             '".$arrayAgenda['dataFinal']."',
             ".$arrayAgenda['idHost'].",
             ".$arrayAgenda['idPet'].",
             ".$arrayAgenda['idTipo'].",
             ".$arrayAgenda['idCliente'].",
             '".$arrayAgenda['nome']."',
             '".$arrayAgenda['cpf']."',
             '".$arrayAgenda['endereco']."',
             '".$arrayAgenda['status']."'
            
          


         )
     ";

     $conexao = conexao();
            //  echo($sql);
            //  die;

     if($teste = mysqli_query($conexao, $sql)){
        // echo('foi 1');
         return true;
     }else{
        //  echo(' nao foi 1 ');
            return false;
     }
 }


?>