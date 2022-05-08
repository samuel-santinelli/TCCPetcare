<?php
require_once("config/config.php");
require_once(SRC."control/exibirClientes.php");
require_once(SRC."control/exibirPets.php");

$idCliente = $_GET['idCliente'];
$dados= buscaCliente($idCliente); 


?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tela principal</title>
</head>
<body>
    <!-- <form> -->
    <!-- <input value="<?=$idCliente?>" placeholder="idCliente" type="submit" name="idCliente" id="idCliente"/>    -->
    <?php
                $dados = exibirPets();
                while ($exibirClientes = mysqli_fetch_assoc($dados))
                {
               
                
                
                ?>                      



        <a href="../Cuidador/indexBuscaCuidador.php?idPet=<?=$exibirClientes['idPet']?>&idCliente=<?=$exibirClientes['idCliente']?>">   
        <button id="Adicionar um pet" > Agendar o seu cuidador</button>                   
        </a>

        <?php  
                }    
                ?>
    <!-- </form> -->
</body>
</html>