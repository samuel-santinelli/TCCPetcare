<?php


require_once('../bd/inserirAgendamento.php');
require_once('../config/config.php');
require_once(SRC .'bd/update.php');
require_once(SRC."../Cliente/bd/listarClientes.php");


$valor = (double) null;
$dataFinal = (string) null;
$dataInicial = (string) null;

// $idCliente= $_GET['idCliente'];
// //   echo ($idCliente);
//   $dados= buscaCliente($idCliente);

// if(isset($_GET['id'])){
//     $id = (int) $_GET['id'];
// }
// else{
//   $id = (int) 0; 
// } 



if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $valor = $_POST['valor'];
    $dataInicial = $_POST['dataInicial'];
    $dataFinal = $_POST['dataFinal'];
    $idTipo = $_POST['sltTipos'];
    $idCliente = $_POST['idCliente'];
    $idPet = $_POST['idPet'];
    $idHost = $_POST['idHost'];

  



    if($valor == '' )
    {
        echo ("<script> 
            alert('Preencha todos os campos');
            window.history.back();
        </script>");  
    }
        
   
        else{
        
            $agendamento = array(
                "valor" => $valor,
                "dataInicial" => $dataInicial,
                "dataFinal" => $dataFinal,
                "idHost" => $idHost,
                "idPet" => $idPet,
                "idTipo" => $idTipo,
                "idCliente" => $idCliente
               
            
            );
         
                
           
            
           if (inserirAgenda($agendamento))
                echo ("
                    <script>
                        alert('foi inserido');
                        window.location.href = '../indexAgendamento.php';
                    </script>
                    " );
            else
                echo ("
                    <script>
                        alert('nao foi inserido');
                         window.history.back();
                    </script>
                ");
            
        }




}








?>

