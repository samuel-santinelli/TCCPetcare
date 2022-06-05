<?php

require_once('../config/config.php');


require_once(SRC .'bd/listarAgenda.php');

$idAgenda= $_GET['id'];
// echo ($idCuidador);

$dados= buscaAgendamento($idAgenda); 
// echo($dados);
// die;
if($exbirCuidador = mysqli_fetch_assoc($dados)){
 
    session_start();
    
   
    $_SESSION['agendar'] = $exbirCuidador;
    
  
    header('location:../indexAgendamento.php');
}else{
    echo ("
            <script>
              alert('Erro');
             window.history.back();
             </script>
        ");
}
?>