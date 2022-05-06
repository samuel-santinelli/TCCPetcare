<?php

require_once('../config/config.php');


require_once(SRC .'bd/listarHost.php');

$idCuidador= $_GET['id'];
// echo ($idCuidador);

$dados= busca($idCuidador); 
// echo($dados);
// die;
if($exbirCuidador = mysqli_fetch_assoc($dados)){
 
    session_start();
    
   
    $_SESSION['cuidador'] = $exbirCuidador;
    
  
    header('location:../index.php');
}else{
    echo ("
            <script>
              alert('Erro');
             window.history.back();
             </script>
        ");
}
?>