<?php


require_once('bd/conexao.php');
require_once('config/config.php');
require_once(SRC. 'control/exibirSexo.php');
//  conexao();

$nome = (string) null;
$email = (string) null;
$senha = (string) null;
$cpf = (string) null;
$confirmarSenha = (string) null;
// $foto = (string) ''; 
$idSexo =  ( int )null;
$data = (string) null;


$nomeSexo = "Selecione um Item"; 






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
            <form method="post"  action="control/recebeCliente.php">
            
      
                    
            <input value="<?=$nome?>" placeholder="Nome" type="text" name="inputNome" id="inputNome"/>
            <input value="<?=$data?>" placeholder="Data" type="text" name="inputData" id="inputData"/>
            <input value="<?=$email?>" placeholder="Email" type="email" name="inputEmail" id="inputEmail"/>
            <input value="<?=$senha?>" placeholder="Senha" type="password" name="inputSenha" id="inputSenha"/>
            <input value="<?=$confirmarSenha?>" placeholder="Confirmar Senha" type="password" name="inputConfirmarSenha" id="inputConfirmarSenha"/>
    
            <input value="<?=$cpf?>" placeholder="CPF" type="text" name="inputCPF"/>
                          
            <select name="sltSexo">
                            
                            <option selected value="<?=$idSexo?>"> <?=$nomeSexo?>  </option> 
                        <?php 
                            
                               $listar= exibirSexo();
                              
            
                                while($exibir= mysqli_fetch_assoc($listar))
                                {
                                    ?>
                                        <option value="<?=$exibir['idSexo']?>"> <?=$exibir['nomeSexo']?> </option>
                                    <?php
                                }
      
                        ?>
                        </select>
            <input value="Salvar" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
        </form>

       
</body> 
</html>



