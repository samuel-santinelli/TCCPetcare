<?php

require_once('../config/config.php');


require_once(SRC .'bd/listarClientes.php');

$idCliente= $_GET['id'];
// echo ($idCuidador);

$dados= buscaCliente($idCliente); 
// echo($dados);
// die;
if($exbirCliente = mysqli_fetch_assoc($dados)){
 
    session_start();
    
   
    $_SESSION['cliente'] = $exbirCliente;
    
  
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