<?php

require_once('../config/config.php');


require_once(SRC .'bd/listarPets.php');

$idPet= $_GET['id'];
// echo ($idPet);
// die;
$dados= buscaPet($idPet); 
// var_dump($dados);
// die;
if($exibirPet = mysqli_fetch_assoc($dados)){
 
    session_start();
    
   
    $_SESSION['pet'] = $exibirPet;
    
  
    header('location:../indexPets.php');
}else{
    echo ("
            <script>
              alert('Erro');
             window.history.back();
             </script>
        ");
}
?>