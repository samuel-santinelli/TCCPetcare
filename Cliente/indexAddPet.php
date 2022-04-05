<?php
require_once("config/config.php");
require_once(SRC."control/exibirClientes.php");
$idCliente = (int) 0;

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" enctype="multipart/form-data" action="indexPets.php?idCliente=<?=$idCliente?>">
            
            <button id="Deixar para depois "> Deixar para depois</button> 
   
    <?php
                $dados = exibirClientes();
                
                $exibirClientes = mysqli_fetch_assoc($dados)
                
                ?>
            
                        <a href="indexPets.php?id=<?=$exibirClientes['idCliente']?>">
                        <button id="Adicionar um pet" > Adicionar um pet</button>
                        </a>
                    <?php  
                    
                ?>
           </form>     
</body>
</html>