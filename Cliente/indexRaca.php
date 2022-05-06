<?php
require_once('config/config.php');
require_once(SRC."control/exibirPorte.php");
require_once(SRC."control/exibirRaca.php");
$nomeRaca = (string)null;


$idPorte = (int) 0;
 $nomePorte = "nome Porte";

?>



<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro do RACA</title>
</head>
<body>
            <form method="post" enctype="multipart/form-data" action="control/recebeRaca.php">
      
                   

            <input value="<?=$nomeRaca?>" placeholder="nome" type="text" name="nome"/>

            <select name="sltPorte">
                            
                            <option selected value="<?=$idPorte?>"> <?=$nomePorte?>  </option> 
                        <?php 
                            
                               $listar= exibirPorte();
                              
            
                                while($exibir= mysqli_fetch_assoc($listar))
                                {
                                    ?>
                                        <option value="<?=$exibir['idPorte']?>"> <?=$exibir['nomePorte']?> </option>
                                    <?php
                                }
      
                        ?>
                </select> 
    
         <input value="Salvar" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
     
                       
        
        </form> 
      
        <?php
                $dados = exibirRaca();
                
                while ($exibirRaca = mysqli_fetch_assoc($dados))
                {
                ?>
                <tr id="tblLinhas">
                    <td ><?=$exibirRaca['nomeRaca']?></td>
                    <br>
                    <td ><?=$exibirRaca['idPorte']?></td>
                    <br>
                 
                   
    
                   

                 <pre>

                    <?php  
                    }
                ?>
</body> 
</html>



