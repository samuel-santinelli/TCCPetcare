<?php
require_once("config/config.php");
require_once(SRC."control/exibirClientes.php");
// require_once(SRC .'bd/listarClientes.php');
// $idCliente = (int) 0;




if(isset($_GET['id'])){
    $idCliente = (int) $_GET['id'];
}
else{
  $idCliente = (int) 0; 
} 



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
    <form method="post" enctype="multipart/form-data" action="indexPets.php?id=<?=$idCliente?>">
            
            <!-- <button id="Deixar para depois "> Deixar para depois</button>  -->
   
   
           </form>   
           <?php
              
              require_once(SRC .'bd/listarClientes.php');

              $idCliente= $_GET['id'];
              //  echo ($idCliente);

              $dados= buscaCliente($idCliente); 
             
              $exibirCliente =mysqli_fetch_assoc($dados);
              // var_dump($exbirCliente);
              // die;
                 
         
  
  ?>

       
          <a href="indexPrincipal.php?id=<?=$exibirCliente['idCliente']?>">
          <button  > Deixar Para depois</button>
          </a>
      <?php  
      
  ?> 
           
           <?php
              
              require_once(SRC .'bd/listarClientes.php');

              $idCliente= $_GET['id'];
              //  echo ($idCliente);

              $dados= buscaCliente($idCliente); 
             
              $exibirCliente =mysqli_fetch_assoc($dados);
              // var_dump($exbirCliente);
              // die;
                 
         
  
  ?>

       
          <a href="indexPets.php?id=<?=$exibirCliente['idCliente']?>">
          <button id="Adicionar um pet" > Adicionar um pet</button>
          </a>
      <?php  
      
  ?> 
</body>
</html>