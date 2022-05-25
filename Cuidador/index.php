<?php

session_start();

require_once("bd/conexao.php");
require_once('config/config.php');
require_once(SRC. 'control/exibir.php');

require_once(SRC. 'control/exibirHost.php');
 //conexao();

$nome = (string) null;
$sobrenome = (string) null;
$email = (string) null;
$senha = (string) null;
$cpf = (string) null;
$sobrenome = (string) null;
$confirmarSenha = (string) null;
$limitacoes = (string) null;
$moradia = (string) null;
$preferencias = (string) null;
$data = (string) null;
$foto = (string) ''; 
$biografia = (string) null;
 $idAgendaHost =  ( int )null;
$idSexoHost =  ( int )null;
$possuiAnimais = (boolean) 0;
$possuiCriancas = (boolean) 0;
$id = (int) 0;
$numero =  ( int )null;
$endereco = (string) null;
$bairro = (string) null;
$cep = (string) null;
$complemento = (string) null;
$cidade = (string) null;
$valorHora = (double) null;
$telefone = (string) null;


 $idSexo = (int) null; 
 $modo = (string) "Salvar"; 
 $foto = (string) "semFoto.png";
$nomeSexo = "Selecione um Item"; 

if(isset( $_SESSION['cuidador'])){
    $id = $_SESSION['cuidador']['idHost'];
    $nome = $_SESSION['cuidador']['nome'];
    $data =  $_SESSION['cuidador']['dataNascimento'];
    $email = $_SESSION['cuidador']['email'];
    $senha = $_SESSION['cuidador']['senha'];
    $foto = $_SESSION['cuidador'] ['foto'];
    $biografia = $_SESSION['cuidador']['biografia'];
    $possuiAnimais = $_SESSION['cuidador']['possuiAnimais'];
    $possuiCriancas = $_SESSION['cuidador']['possuiCriancas'];
    $cpf = $_SESSION['cuidador']['cpf'];
    $preferencias = $_SESSION['cuidador']['preferencias'];
    $moradia = $_SESSION['cuidador']['moradia'];
    $limitacoes = $_SESSION['cuidador']['limitacoes'];
    $idSexoHost =$_SESSION['cuidador'] ['idSexoHost'];
    $nomeSexo =$_SESSION['cuidador'] ['nomeSexo']; 
    // $sobrenome = $_SESSION['cuidador']['sobrenome'];
    $valorHora = $_SESSION['cuidador'] ['valorHora']; 
    $telefone = $_SESSION['cuidador'] ['telefone'];
    $modo = "Atualizar";

    unset($_SESSION['cuidador']);
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
            <form method="post" enctype="multipart/form-data" action="control/recebe.php?modo=<?=$modo?>&id=<?=$id?>&nomeFoto=<?=$foto?>">
            
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
            <!-- <input value="<?=$sobrenome?>" placeholder="Sobrenome" type="sobrenome" name="inputSobrenome" id="inputSobrenome"/> -->
            <input value="<?=$email?>" placeholder="Email" type="email" name="inputEmail" id="inputEmail"/>
            <input value="<?=$senha?>" placeholder="Senha" type="password" name="inputSenha" id="inputSenha"/>
            <input value="<?=$confirmarSenha?>" placeholder="Confirmar Senha" type="password" name="inputConfirmarSenha" id="inputConfirmarSenha"/>
            
                            
            <select name="sltSexo">
                            
                            <option selected value="<?=$idSexo?>"> <?=$nomeSexo?>  </option> 
                        <?php 
                            
                               $listar= exibir();
                              
            
                                while($exibir= mysqli_fetch_assoc($listar))
                                {
                                    ?>
                                        <option value="<?=$exibir['idSexoHost']?>"> <?=$exibir['nomeSexo']?> </option>
                                    <?php
                                }
      
                        ?>
                        </select>

        

            <input value="<?=$cpf?>" placeholder="CPF" type="text" name="inputCPF"/>
            <input value="<?=$possuiAnimais?>" placeholder="Possui animais" type="checkbox" name="possuiAnimais"/>
            <input value="<?=$possuiCriancas?>" placeholder="Possui Crianças" type="checkbox" name="possuiCriancas"/>
            <input value="<?=$limitacoes?>" placeholder="Limitações" type="teste" name="limitacoes"/>
            <input value="<?=$moradia?>" placeholder="Moradia" type="text" name="inputMoradia"/>
            <input value="<?=$preferencias?>" placeholder="Prefêrencias" type="text" name="inputPreferencias"/>
            <input value="<?=$biografia?>" placeholder="Biografia" type="text" name="inputBiografia"/>
            <input value="<?=$cep?>" placeholder="cep" type="text" name="cep"/>
<input value="<?=$endereco?>" placeholder="endereco" type="text" name="endereco"/>
<input value="<?=$bairro?>" placeholder="bairro" type="text" name="bairro"/>
<input value="<?=$cidade?>" placeholder="cidade" type="text" name="cidade"/>
<input value="<?=$complemento?>" placeholder="complemento" type="text" name="complemento"/>
<input value="<?=$numero?>" placeholder="numero" type="text" name="numero"/>
<input value="<?=$valorHora?>" placeholder="valorHora" type="text" name="valorHora"/>
            <input value="<?=$modo?>" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
          
     
     
        </form>

        <?php
                $dados = exibirHost();
                
                while ($exibirHost = mysqli_fetch_assoc($dados))
                {
                ?>
                <tr id="tblLinhas">
                    <td class="tblColunas registros"><?=$exibirHost['nome']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHost['dataNascimento']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHost['cpf']?></td>
                    <br>
                   

                    <td class="tblColunas registros"><?=$exibirHost['email']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHost['senha']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHost['biografia']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHost['possuiAnimais']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHost['possuiCriancas']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHost['preferencias']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHost['moradia']?></td>
                    <br>
                    <td class="tblColunas registros"><?=$exibirHost['limitacoes']?></td>
                    <br>
                  
                   
                 <pre>

                 <td > <td ><img class= "foto"src="<?= NOME_DIRETORIO_FILE.$exibirHost['foto']?>"></td></td>

                 <a onclick="return confirm('Quer excluir?');" href="control/deleta.php?id=<?=$exibirHost['idHost']?>&foto=<?=$exibirHost['foto']?>"> 
                            <img src="img/trash.png" >
                        </a>   
                        <a href="control/editaCuidador.php?id=<?=$exibirHost['idHost']?>">
                          <img src="img/edit.png" > 
                        </a>

                    <?php  
                    }
                ?>

</body> 
</html>



