<?php
require_once("bd/conexao.php");
require_once('config/config.php');
require_once(SRC. 'control/exibirHistorico.php');
require_once('../Cliente/bd/listarEspecie.php'); 

$nomeEspecie = "Selecione uma especie";
$idEspecie = (int) null;
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Histórico cuidador</title>
</head>
<body>
           
<select name="sltSexo">
                            
                            <option selected value="<?=$idEspecie?>"> <?=$nomeEspecie?>  </option>
                        <?php 
                       
                               $listar= listarEspecie();
                              
                               
            
                                while($exibir= mysqli_fetch_assoc($listar))
                                {
                                    ?>
                                        <option value="<?=$exibir['idEspecie']?>"> <?=$exibir['nomeEspecie']?> </option>
                                    <?php
                                }
      
                        ?>
                        </select>



<?php
                $dados = exibirHistorico();
                
                while ($exibirHistorico = mysqli_fetch_assoc($dados))
                {
                ?>
                <tr id="tblLinhas">
                    <td class="tblColunas registros"><?=$exibirHistorico['valor']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHistorico['dataInicial']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHistorico['dataFinal']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHistorico['idEspecie']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHistorico['nomePet']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHistorico['nomeTipo']?></td>
                    <br>

                 <pre>

                 <td > <td ><img class= "foto"src="<?= NOME_DIRETORIO_FILE.$exibirHistorico['foto']?>"></td></td>

                    <?php  
                    }
                ?>


</body>
</html>