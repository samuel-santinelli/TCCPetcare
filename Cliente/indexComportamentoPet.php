<?php
require_once('config/config.php');
require_once(SRC.'control/exibirVacinas.php');
require_once(SRC.'control/exibirComportamentoPet.php');
require_once(SRC.'bd/listarPets.php');
$idPet = (int)null;
$idComportamento = (int)null;

$idComportamento= $_GET['idComportamento'];
  echo ($idComportamento);

  $dados= buscaComportamentoPet($idComportamento); 
  $idPet= $_GET['idPet'];
  // echo ($idPet);

  $dados= buscaPet($idPet); 
  $idComportamento = (int) null;
  $nomeComportamento = "escolha";

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
            <form method="post" enctype="multipart/form-data" action="control/recebePetsComportamentos.php?idComportamento=<?=$idComportamento?>idPet=<?=$idPet?>">
      
                   

            <input value="<?=$idPet?>" placeholder="idPet" type="text" name="idPet"/>
          
                        <?php 
                            
                               $listar= exibirComportamentoPet();
                              
            
                                $exibir= mysqli_fetch_assoc($listar)
                                
                                    ?>
                                     
                                     <div>
            <label> docil</label>
            <input value="<?=$docil?>" placeholder="docil" type="checkbox" name="docil"/>
            <label> temperamental</label>
            <input value="<?=$temperamental?>" placeholder="temperamental" type="checkbox" name="temperamental"/>
            <label> sistematico</label>
            <input value="<?=$sistematico?>" placeholder="sistematico" type="checkbox" name="sistematico"/>
            <label> antissocial</label>
            <input value="<?=$antissocial?>" placeholder="antissocial" type="checkbox" name="antissocial"/>
            <label> ciumento</label>
            <input value="<?=$ciumento?>" placeholder="ciumento" type="checkbox" name="ciumento"/>
            <label> acanhoso</label>
            <input value="<?=$acanhoso?>" placeholder="acanhoso" type="checkbox" name="acanhoso"/>
            <label> guloso</label>
            <input value="<?=$guloso?>" placeholder="guloso" type="checkbox" name="guloso"/>
            <label> bravo</label>
            <input value="<?=$bravo?>" placeholder="bravo" type="checkbox" name="bravo"/>
            </div>
                                 
                                   <?php
                                
      
                        ?>
                
         <input value="Salvar" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
     
                       
        
        </form> 
      
       
</body> 
</html>



