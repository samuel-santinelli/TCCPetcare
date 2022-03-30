<?php
require_once('config/config.php');
require_once(SRC."control/exibirEspecie.php");
require_once(SRC."control/exibirFase.php");
require_once(SRC."control/exibirRaca.php");
require_once(SRC."control/exibirClientes.php");

$nome = (string)null;
$deficiencia = (int) null;
$descricao = (string) null;
$castrado = (string) null;
$foto = (string) '';
$dataNascimento = (string) null;
$avaliacao = (int) 0;
$idRaca = (int) 0;
$idEspecie = (int) 0;
$idFase = (int) 0;
$idCliente = (int) null;
$nomeEspecie = "Selecione uma especie"; 
$nomeFases = "Selecione uma fase"; 
 $nomeRacas = "Selecione uma racas"; 
 $nomeCliente = "nome cliente";



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
            <form method="post" enctype="multipart/form-data" action="control/recebePets.php">
      
            <select name="sltEspecie">
                            
                            <option selected value="<?=$idEspecie?>"> <?=$nomeEspecie?>  </option> 
                        <?php 
                            
                               $listar= exibirEspecie();
                              
            
                                while($exibir= mysqli_fetch_assoc($listar))
                                {
                                    ?>
                                        <option value="<?=$exibir['idEspecie']?>"> <?=$exibir['nomeEspecie']?> </option>
                                    <?php
                                }
      
                        ?>
                        </select>
                          


            <select name="sltFases">
                            
                            <option selected value="<?=$idFases?>"> <?=$nomeFases?>  </option> 
                        <?php 
                            
                               $listar= exibirFase();
                              
            
                                while($exibir= mysqli_fetch_assoc($listar))
                                {
                                    ?>
                                        <option value="<?=$exibir['idFase']?>"> <?=$exibir['tipo']?> </option>
                                    <?php
                                }
      
                        ?>
                        </select>

                        <select name="sltraca">
                        


                        
                            <option selected value="<?=$idRacas?>"> <?=$nomeRacas?>  </option> 
                        <?php 
                            
                               $listar= exibirRaca();
                              
            
                                while($exibir= mysqli_fetch_assoc($listar))
                                {
                                    ?>
                                        <option value="<?=$exibir['idRaca']?>"> <?=$exibir['nomeRaca']?> </option>
                                    <?php
                                }
      
                        ?>
                        </select>      
                        
                   

            <input value="<?=$nome?>" placeholder="nome" type="text" name="nome"/>

          
    
            <input value="<?=$deficiencia?>" placeholder="deficiencia" type="text" name="deficiencia" id="deficiencia"/>
            <input value="<?=$descricao?>" placeholder="descricao" type="text" name="descricao" id="descricao"/>
            <input value="<?=$castrado?>" placeholder="castrado" type="castrado" name="castrado" id="castrado"/>
            <input value="<?=$dataNascimento?>" placeholder="data nascimento" type="text" name="dataNascimento" id="dataNascimento"/>
            <input value="<?=$avaliacao?>" placeholder="avaliacao" type="text" name="avaliacao" id="avaliacao"/>
                      
                                
            <input value="<?=$nome?>" placeholder="Nome" type="text" name="inputNome" id="inputNome"/> 
            <input value="<?=$idCliente?>" placeholder="idCliente" type="text" name="sltClientes" id="inputNome"/>   

         <input value="Salvar" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
     
                       
        
        </form> 
      
       
</body> 
</html>



