<?php

session_start();

require_once('bd/conexao.php');
require_once('config/config.php');
require_once(SRC. 'control/exibirSexo.php');
require_once(SRC. 'control/exibirClientes.php');
require_once(SRC. 'bd/listarClientes.php');
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
$id = (int) 0;
$md = (string) "Salvar"; 
$numero =  ( int )null;
$endereco = (string) null;
$bairro = (string) null;
$cep = (string) null;
$complemento = (string) null;
$cidade = (string) null;

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
    $cep =$_SESSION['cliente'] ['cep'];
    $endereco =$_SESSION['cliente'] ['endereco'];
    $bairro =$_SESSION['cliente'] ['bairro'];
    $cidade =$_SESSION['cliente'] ['cidade'];
    $complemento =$_SESSION['cliente'] ['complemento'];
    $numero =$_SESSION['cliente'] ['numero'];
  
    $nomeSexo =$_SESSION['cliente'] ['nomeSexo']; 
   
    $md = "Atualizar";

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

<form method="post" enctype="multipart/form-data" action="control/recebeCliente.php?modo=<?=$md?>&nomeFoto=<?=$foto?>&id=<?=$id?>">
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
            <input value="<?=$telefone?>" placeholder="telefone" type="text" name="telefone"/>   
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

                    <?php
                        


                    ?>


<input value="<?=$cep?>" placeholder="cep" type="text" name="cep"/>
<input value="<?=$endereco?>" placeholder="endereco" type="text" name="endereco"/>
<input value="<?=$bairro?>" placeholder="bairro" type="text" name="bairro"/>
<input value="<?=$cidade?>" placeholder="cidade" type="text" name="cidade"/>
<input value="<?=$complemento?>" placeholder="complemento" type="text" name="complemento"/>
<input value="<?=$numero?>" placeholder="numero" type="text" name="numero"/>
<input value="<?=$cep?>" placeholder="cep" type="text" name="cep"/>
            <input value="<?=$md?>" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
       
          
  
       
       
        </form>

      

        <?php
                $dados = exibirClientes();
                
                $exibirClientes = mysqli_fetch_assoc($dados)
                
                
                ?>                      



        <a href="indexAddPet.php?id=<?=$exibirClientes['idCliente']?>">   
        <button id="Adicionar um pet" > Adicionar um pet</button>                   
        </a>

        <?php  
                   
                ?>


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

