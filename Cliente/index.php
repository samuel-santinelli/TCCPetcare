<?php

session_start();
require_once('bd/conexao.php');
require_once('config/config.php');
require_once(SRC. 'control/exibirSexo.php');
require_once(SRC. 'control/exibirClientes.php');
//  conexao();

$nome = (string) null;
$email = (string) null;
$senha = (string) null;
$cpf = (string) null;
$confirmarSenha = (string) null;
// $foto = (string) ''; 
$idSexo =  ( int )null;
$data = (string) null;
$telefone = (string) null;

$modo = (string) "Salvar"; 
 
$nomeSexo = "Selecione um Item"; 

$foto = (string) 'semFoto.png'; 

if(isset( $_SESSION['cliente'])){
    $id = $_SESSION['cliente']['idCliente'];
    $nome = $_SESSION['cliente']['nome'];
    $cpf = $_SESSION['cliente']['cpf'];
    $data =  $_SESSION['cliente']['dataNascimento'];
    $foto = $_SESSION['cliente'] ['foto'];
    $email = $_SESSION['cliente']['email'];
    $senha = $_SESSION['cliente']['senha'];
    $telefone = $_SESSION['cliente']['telefone'];
    $idSexo =$_SESSION['cliente'] ['idSexo'];
    $nomeSexo =$_SESSION['cliente'] ['nomeSexo']; 
   
    $modo = "Atualizar";

    unset($_SESSION['cliente']);
}




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
            <form method="post" enctype="multipart/form-data" action="control/recebeCliente.php?nomeFoto=<?=$foto?>&id=<?=$id?>?modo=<?=$modo?>">
           
            <div class="campos">
                        <div class="cadastroInformacoesPessoais">
                            <label> Foto: </label>
                        </div>
                        <div class="cadastroEntradaDeDados">
                            <input type="file" name="fleFoto" accept="image/jpeg, image/jpg, image/png">
                        </div>
                        <div id="visualizarFoto"> 
                            <img src="<?= NOME_DIRETORIO_FILE.$foto?>"> 

                        </div>
                    </div>


            <input value="<?=$telefone?>" placeholder="telefone" type="text" name="telefone"/>
                    
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
                      
                                


         <input value="<?=$modo?>" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
        
        
        
        
        </form> 

        <?php
                $dados = exibirClientes();
                
                while ($exibirClientes = mysqli_fetch_assoc($dados))
                {
                ?>
                <tr id="tblLinhas">
                    <td ><?=$exibirClientes['nome']?></td>
                    <br>
                    <td ><?=$exibirClientes['cpf']?></td>
                    <br>
                    <td><?=$exibirClientes['dataNascimento']?></td>
                    <br>
                    <td ><?=$exibirClientes['email']?></td>
                    <br>
                    <td ><?=$exibirClientes['senha']?></td>
                    <br>
                    <td ><?=$exibirClientes['telefone']?></td>
                    <br>
    
                    <td > <td ><img class= "foto"src="<?= NOME_DIRETORIO_FILE.$exibirClientes['foto']?>"></td></td>

                 <pre>



                 <a onclick="return confirm('Quer excluir?');" href="control/deleteCliente.php?id=<?=$exibirClientes['idCliente']?>&foto=<?=$exibirClientes['foto']?>"> 
                            <img src="img/trash.png" >
                        </a>   
                        <a href="control/editarCliente.php?id=<?=$exibirClientes['idCliente']?>">
                          <img src="img/edit.png" > 
                        </a>
                    <?php  
                    }
                ?>

       
</body> 
</html>



