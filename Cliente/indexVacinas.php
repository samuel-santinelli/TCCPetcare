<?php
require_once('config/config.php');
require_once(SRC.'control/exibirVacinas.php');

$nomeVacina = (string)null;
$idVacina = (int) null;

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
            <!-- <form method="post" enctype="multipart/form-data" action="control/recebeVacina.php?idVacina=<?=$idVacina?>">
       -->
            <select name="sltVacina">
                            
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

                      
        <?php
                $dados = exibirVacinas();
                
                while ($exibir = mysqli_fetch_assoc($dados))
                {
                ?>
                  <a href="indexVacinaPet.php?id=<?=$exibir['idVacina']?>">   
                 <button id="Adicionar um pet" > Vacina</button>                   
                </a>

                    <?php  
                    }
                ?>
          
    
         <!-- <input value="Salvar" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>         -->
     
                       
        
        </form> 
        


       
</body> 
</html>



