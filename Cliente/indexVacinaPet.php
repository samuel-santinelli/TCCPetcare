<?php
require_once('config/config.php');
require_once(SRC.'control/exibirVacinas.php');
require_once(SRC.'bd/listarPets.php');
$idPet = (int)null;
$idVacina = (int)null;

// $idVacina= $_GET['idVacina'];
//   // echo ($idVacina);

//   $dados= buscaVacina($idVacina); 
  $idPet= $_GET['idPet'];
  // echo ($idVacina);

  $dados= buscaPet($idPet); 
  
$nomeVacina = 'Selecione uma vacina';
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
            <select name="idVacina">
                            
                            <option selected value="<?=$idVacina?>"> <?=$nomeVacina?>  </option> 
                        <?php 
                            
                               $listar= exibirVacinas();
                              
            
                                while($exibir= mysqli_fetch_assoc($listar))
                                {
                                    ?>
                                     
                                        <option value="<?=$exibir['idVacina']?>"> <?=$exibir['nomeVacina']?> </option>
                                 
                                   <?php
                                }
      
                        ?>
                </select> 
    
         <input value="Salvar" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
     
                       
        
        </form> 
      
       
</body> 
</html>



