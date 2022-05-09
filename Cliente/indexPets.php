<?php

session_start();

require_once('config/config.php');
require_once(SRC."control/exibirEspecie.php");
require_once(SRC."control/exibirFase.php");
require_once(SRC."control/exibirRaca.php");
require_once(SRC."control/exibirClientes.php");
require_once(SRC."control/exibirPets.php");
require_once(SRC.'control/exibirVacinas.php');
require_once(SRC.'control/exibirPorte.php');

// $docil = (int) 0;
// $temperamental = (int) 0;
// $sistematico = (int) 0;
// $antissocial = (int) 0;
// $ciumento = (int) 0;
// $acanhoso = (int) 0;
// $guloso = (int) 0;
// $bravo = (int) 0;



$nome = (string)null;
$comportamento = (string)null;
$deficiencia = (int) null;
$descricao = (string) null;
$castrado = (string) null;
$foto = (string) "semFoto.png";
$dataNascimento = (string) null;
$idRacas = (int) 0;
$idVacina = (int) 0;
$nomeVacina = "selecione vacina";
$idEspecie = (int) 0;
$idFases = (int) 0;
$idCliente = (int) null;
$nomeEspecie = "Selecione uma especie"; 
$nomeFases = "Selecione uma fase"; 
 $nomeRacas = "Selecione uma racas"; 
 $nomeCliente = "nome cliente";
 $nomePorte = "nome porte";
 $modo = (string) "Salvar"; 
$idPet = (int) 0;
//  if(isset($_GET['id'])){
//     $idCliente = (int) $_GET['id'];
// }
// else{
//   $idCliente = (int) 0; 
// } 



$idCliente= $_GET['id'];
//   echo ($idCliente);

  $dados= busca($idCliente); 

//   $Vacina= $_GET['idVacina'];
//   //   echo ($idCliente);
  
//     $dados= buscaVacina($idVacina); 

  if(isset($_SESSION['pet'])) 
  {
      $idPet = $_SESSION['pet']['idPet'];
      $nome = $_SESSION['pet']['nome'];
      $deficiencia = $_SESSION['pet']['deficiencia'];
      $descricao = $_SESSION['pet']['descricao'];
      $castrado = $_SESSION['pet']['castrado'];
      $dataNascimento =$_SESSION['pet']['dataNascimento'];
      $idRacas = $_SESSION['pet']['idRaca'];
      $foto = $_SESSION['pet'] ['foto'];
    //   $nomeEspecie = $_SESSION['pet']['nomeEspecie'];
      $idEspecie = $_SESSION['pet'] ['idEspecie'];
      $idFases = $_SESSION['pet']['idFase'];
      $idCliente = $_SESSION['pet'] ['idCliente']; 
      $comportamento = $_SESSION['pet'] ['comportamento']; 
      $modo = "Atualizar"; 
      

      unset($_SESSION['pet']);
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
            <form method="post" enctype="multipart/form-data" action="control/recebePets.php?modo=<?=$modo?>&id=<?=$idCliente?>&nomeFoto=<?=$foto?>&idPet=<?=$idPet?>&idVacina=<?=$idVacina?>">
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


            <input value="<?=$nome?>" placeholder="nome" type="text" name="nome"/>

          
    
            <input value="<?=$deficiencia?>" placeholder="deficiencia" type="checkbox" name="deficiencia" id="deficiencia"/>
            <input value="<?=$descricao?>" placeholder="descricao" type="text" name="descricao" id="descricao"/>
            <input value="<?=$castrado?>" placeholder="castrado" type="checkbox" name="castrado" id="castrado"/>
            <input value="<?=$dataNascimento?>" placeholder="data nascimento" type="text" name="dataNascimento" id="dataNascimento"/>
            <input value="<?=$comportamento?>" placeholder="comportamento" type="text" name="comportamento" id="comportamento"/>
              
            <!-- <input value="<?=$idCliente?>" placeholder="idCliente" type="text" name="idCliente" id="idCliente"/>    -->

           



 
          
         <input value="<?=$modo?>" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
     
                       
        
        </form> 

        
                <!-- // $dados = exibirPets();
                
                // while ($exibir = mysqli_fetch_assoc($dados))
                // {
                //  -->
                  <!-- <a href="indexVacinaPet.php?id=">   
                  <button id="Adicionar um pet" > pet</button>                   
                 </a> -->

                     
                <!-- //     } -->
                
          
      
        <?php
                $dados = exibirPets();
                
                while ($exibirPets = mysqli_fetch_assoc($dados))
                {
                ?>
                <tr id="tblLinhas">
                    <td ><?=$exibirPets['nome']?></td>
                    <br>
                    <td ><?=$exibirPets['deficiencia']?></td>
                    <br>
                    <td><?=$exibirPets['descricao']?></td>
                    <br>
                    <td><?=$exibirPets['foto']?></td>
                    <br>
                    <td ><?=$exibirPets['dataNascimento']?></td>
                    <br>
                    <td ><?=$exibirPets['idRaca']?></td>
                    <br>
                    <td ><?=$exibirPets['idEspecie']?></td>
                    <br>
                    <td ><?=$exibirPets['idFase']?></td>
                    <br>
                 
    
                    <td > <td ><img class= "foto"src="<?= NOME_DIRETORIO_FILE.$exibirPets['foto']?>"></td></td>
                    <a onclick="return confirm('Quer excluir?');" href="control/deletePet.php?id=<?=$exibirPets['idPet']?>&foto=<?=$exibirPets['foto']?>"> 
                            <img src="img/trash.png" >
                        </a>   

                        <a href="control/editarPet.php?id=<?=$exibirPets['idPet']?>">
                          <img src="img/edit.png" > 
                        </a>
                 <pre>

                    <?php  
                    }
                ?>
       
</body> 
</html>



