<?php
require_once('config/config.php');
require_once(SRC.'control/exibirVacinas.php');
require_once(SRC.'bd/listarPets.php');
$idPet = (int)null;
$idVacina = (int)null;

$idVacina= $_GET['id'];
  // echo ($idVacina);

  $dados= buscaVacina($idVacina); 
  // $idPet= $_GET['idPet'];
  // // echo ($idVacina);

  // $dados= buscaPet($idPet); 
  
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
            <form method="post" enctype="multipart/form-data" action="control/recebeVacinaPet.php?id=<?=$idVacina?>idPet=<?=$idPet?>">
      
                   

            <input value="<?=$idPet?>" placeholder="idPet" type="text" name="idPet"/>
            <input value="<?=$idVacina?>" placeholder="idVacina" type="text" name="idVacina"/>
          
    
         <input value="Salvar" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
     
                       
        
        </form> 
      
       
</body> 
</html>



