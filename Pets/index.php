<!DOCTYPE html>
<?php

$nome = (string)null;
$deficiencia = (string) null;
$descricao = (string) null;
$castrado = (string) null;
$foto = (string) '';
$dataNascimento = (string) null;
$avaliacao = (int) 0;
$idRaca = (int) 0;
$idEspecie = (int) 0;
$idFase = (int) 0;


?>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pets</title>
</head>
<body>
    
<form method="post" enctype="multipart/form-data" action="control/recebePets.php">
       


            <input value="<?=$nome?>" placeholder="nome" type="text" name="nome"/>
            <input value="<?=$deficiencia?>" placeholder="deficiencia" type="text" name="deficiencia" id="deficiencia"/>
            <input value="<?=$descricao?>" placeholder="descricao" type="text" name="descricao" id="descricao"/>
            <input value="<?=$castrado?>" placeholder="castrado" type="castrado" name="castrado" id="castrado"/>
            <input value="<?=$dataNascimento?>" placeholder="data nascimento" type="text" name="dataNascimento" id="dataNascimento"/>
            <input value="<?=$avaliacao?>" placeholder="avaliacao" type="text" name="avaliacao" id="avaliacao"/>
                        
                      
    
         <input value="Salvar" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
        
        
        
        </form> 


</body>
</html>