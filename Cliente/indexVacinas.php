<?php
require_once('config/config.php');


$nomeVacinas = (string)null;




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
            <form method="post" enctype="multipart/form-data" action="control/recebeVacina.php">
      
                   

            <input value="<?=$nomeVacinas?>" placeholder="nome" type="text" name="nome"/>

          
    
         <input value="Salvar" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
     
                       
        
        </form> 
      
       
</body> 
</html>



