<?php
require_once("config/config.php");
require_once(SRC. 'control/exibirHost.php');
require_once(SRC."../Cliente/bd/listarClientes.php");
require_once(SRC."../Cliente/control/exibirPets.php");
require_once(SRC."../Cuidador/bd/listarHost.php");
$idCliente= $_GET['idCliente'];
//   echo ($idCliente);

  $dados= buscaClientePet($idCliente);
  
$idPet= $_GET['idPet'];
//   echo ($idPet);

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tela busca por cuidadores</title>
</head>
<body>
   


   
<?php
                $dados = exibirHost();
               
                while ($exibirHost = mysqli_fetch_assoc($dados))
                {
                ?>
               
               <a href="../Cuidador/indexAgendamento.php?idCliente=<?=$idCliente?>&idPet=<?=$idPet?>&idHost=<?=$exibirHost['idHost']?>">   
        <button  > Agendar</button>                   
        </a>
                
                    <?php  
                    }
                ?>



</body>
</html>