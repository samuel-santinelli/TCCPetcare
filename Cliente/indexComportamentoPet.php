<?php
require_once('config/config.php');
require_once(SRC.'control/exibirVacinas.php');
require_once(SRC.'control/exibirComportamentoPet.php');
require_once(SRC.'bd/listarPets.php');
$idPet = (int)null;
$idComportamento = (int)null;

$idComportamento= $_GET['idComportamento'];
  echo ($idComportamento);

  $dados= buscaComportamentoPet($idComportamento); 
  $idPet= $_GET['idPet'];
  // echo ($idPet);

  $dados= buscaPet($idPet); 
  
  // $nomeComportamento = "escolha";

?>



<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro do cuidador</title>
</head>
<body>                                                                                                                                                           
            <form method="post" enctype="multipart/form-data" action="control/recebePetsComportamentos.php?idComportamento=<?=$idComportamento?>&idPet=<?=$idPet?>">
      
                   

            <input value="<?=$idPet?>" placeholder="idPet" type="text" name="idPet"/>
            <input value="<?=$idComportamento?>" placeholder="idComportamento" type="text" name="idComportamento"/>
          
                      
                
         <input value="Salvar" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
     
                       
        
        </form> 
      
       
</body> 
</html>



