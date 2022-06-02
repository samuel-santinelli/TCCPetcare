<?php
require_once('config/config.php');
require_once(SRC. 'control/exibirTiposServicos.php');
require_once(SRC."../Cliente/bd/listarClientes.php");
require_once(SRC."../Cuidador/bd/listarHost.php");
require_once(SRC. 'control/exibirAgenda.php');

$idTipo = (int) null;
$nome = ("selecione um tipo");
$modo = (string) "Salvar";
$dataFinal = (string) null;

// $idCliente= $_GET['idCliente'];
// //   echo ($idCliente);

//   $dados= buscaClientePet($idCliente);
  
// $idPet= $_GET['idPet'];
// //   echo ($idCliente);

//   $dados= buscaClientePet($idPet);
  
//   $idHost = $_GET['idHost'];
//   $dados= buscaHost($idHost); 
  $status = "Processamento";

  if(isset( $_SESSION['agendar'])){

    $status = "Aceitar";

    unset($_SESSION['agendar']);
}


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
<form method="post" action="control/recebeAgenda.php?status=<?=$status?>&idCliente=<?=$idCliente?>&idPet=<?=$idPet?>&idHost=<?=$idHost?>&modo=<?=$modo?>">

<!-- <input value="" placeholder="nome" type="text" name="nome" id="nome"/> -->


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
                                        <option value="<?=$exibir['idTipo']?>"> <?=$exibir['nomeTipo']?> </option>
                                    <?php
                                }
      
                        ?>
                        </select>
                        <input value="<?=$idCliente?>" placeholder="idCliente" type="text" name="idCliente" id="idCliente"/>   
                        <input value="<?=$idPet?>" placeholder="idPet" type="text" name="idPet" id="idPet"/>   
                        <input value="<?=$idHost?>" placeholder="idHost" type="text" name="idHost" id="idHost"/>  
                        <input value="<?=$nome?>" placeholder="nome" type="text" name="nome" id="nome"/>   
                        <input value="<?=$cpf?>" placeholder="cpf" type="text" name="cpf" id="cpf"/>
                        <input value="<?=$endereco?>" placeholder="endereco" type="text" name="endereco" id="endereco"/>   
                        <input value="<?=$status?>" placeholder="status" type="text" name="status" id="status"/>   
            <input value="<?=$modo?>" type="submit" name="inputConfirmarSenha" id="buttonProximo" class="buttonProximo"/>        
        </form>


        <?php
                $dados = exibirAgenda();
                
                while ($exibirAgenda = mysqli_fetch_assoc($dados))
                {
                ?>
                <tr id="tblLinhas">
                    <td class="tblColunas registros"><?=$exibirAgenda['nome']?></td>
                    <br>
                    <tr id="tblLinhas">
                    <td class="tblColunas registros"><?=$exibirAgenda['valor']?></td>
                    <br>
                    <tr id="tblLinhas">
                    <td class="tblColunas registros"><?=$exibirAgenda['dataInicial']?></td>
                    <br>
                    <tr id="tblLinhas">
                    <td class="tblColunas registros"><?=$exibirAgenda['dataFinal']?></td>
                    <br>
                    <tr id="tblLinhas">
                    <td class="tblColunas registros"><?=$exibirAgenda['cpf']?></td>
                    <br>
                    <tr id="tblLinhas">
                    <td class="tblColunas registros"><?=$exibirAgenda['endereco']?></td>
                    <br>
                 <pre>

         

                        <a href="control/editaAgendamento.php?id=<?=$exibirAgenda['idServico']?>">
                          <img src="img/edit.png" > 
                        </a>

                    <?php  
                    }
                ?>
</body>
</html>