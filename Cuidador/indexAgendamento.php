<?php
require_once('config/config.php');
require_once(SRC. 'control/exibirTiposServicos.php');


$idTipo = (int) null;
$nome = ("selecione um tipo");
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agendamento</title>
</head>
<body>
<form method="post" action="control/recebeAgenda.php">

<input value="" placeholder="nome" type="text" name="nome" id="nome"/>


<input value="" placeholder="cpf" type="text" name="cpf" id="cpf"/>
<input value="" placeholder="endereco" type="text" name="nome" id="endereco"/>
<input value="" placeholder="valor" type="text" name="valor" id="valor"/>
            <input value="" placeholder="dataInicial" type="date" name="dataInicial" id="dataInicial"/>
            <input value="" placeholder="dataFinal" type="date" name="dataFinal" id="dataFinal"/>
        
           
                                      
            <select name="sltTipos">
                            
                            <option selected value="<?=$idTipo?>"> <?=$nome?>  </option> 
                        <?php 
                            
                               $listar= exibirTiposServicos();
                              
            
                                while($exibir= mysqli_fetch_assoc($listar))
                                {
                                    ?>
                                        <option value="<?=$exibir['idTipo']?>"> <?=$exibir['nome']?> </option>
                                    <?php
                                }
      
                        ?>
                        </select>
          
            <input value="agendar" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
        </form>
</body>
</html>