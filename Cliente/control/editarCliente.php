<?php

require_once('../config/config.php');


require_once(SRC .'bd/listarClientes.php');

$idCliente= $_GET['id'];
// echo ($idCliente);

$dados= buscaCliente($idCliente); 
// echo($dados);
// die;
if($exbirCliente = mysqli_fetch_assoc($dados)){
 
    session_start();
    
   
    $_SESSION['cliente'] = $exbirCliente;
    
  
    header('location:../indexCliente.php');
}else{
    echo ("
            <script>
              alert('Erro');
             window.history.back();
             </script>
        ");
}
?>