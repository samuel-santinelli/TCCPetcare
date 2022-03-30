<?php
require_once('config/config.php');

$docil = (int) 0;
$temperamental = (int) 0;
$sistematico = (int) 0;
$antissocial = (int) 0;
$ciumento = (int) 0;
$acanhoso = (int) 0;
$guloso = (int) 0;
$bravo = (int) 0;





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
            <form method="post" enctype="multipart/form-data" action="control/recebeComportamento.php">
      
            <div>
            <label> docil</label>
            <input value="<?=$docil?>" placeholder="docil" type="checkbox" name="docil"/>
            <label> temperamental</label>
            <input value="<?=$temperamental?>" placeholder="temperamental" type="checkbox" name="temperamental"/>
            <label> sistematico</label>
            <input value="<?=$sistematico?>" placeholder="sistematico" type="checkbox" name="sistematico"/>
            <label> antissocial</label>
            <input value="<?=$antissocial?>" placeholder="antissocial" type="checkbox" name="antissocial"/>
            <label> ciumento</label>
            <input value="<?=$ciumento?>" placeholder="ciumento" type="checkbox" name="ciumento"/>
            <label> acanhoso</label>
            <input value="<?=$acanhoso?>" placeholder="acanhoso" type="checkbox" name="acanhoso"/>
            <label> guloso</label>
            <input value="<?=$guloso?>" placeholder="guloso" type="checkbox" name="guloso"/>
            <label> bravo</label>
            <input value="<?=$bravo?>" placeholder="bravo" type="checkbox" name="bravo"/>
            </div>



 
          
    
         <input value="Salvar" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
     
                       
        
        </form> 
      
       
</body> 
</html>









