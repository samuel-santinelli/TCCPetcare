<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirVacinaPet.php');
require_once(SRC.'control/exibirVacinas.php');
require_once(SRC.'bd/listarPets.php');
require_once(SRC."control/exibirPets.php");


$idPet = (int)null;
$idComportamento = (int)null;

// $idVacina= $_GET['idVacina'];
//   echo ($idVacina);

//   $dados= buscaVacina($idVacina); 
  $idPet= $_GET['idPet'];
  echo ($idPet);

  $dados= buscaPet($idPet); 


if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $idPet = $_POST['idPet'];
    $idComportamento = $_POST['idComportamento'];
    // echo($nome);
    // die;




        
    if(strlen($idPet)>100)
        {
              echo ("<script> 
            alert('Maximo de caracter');
            window.history.back(); 
        </script>"); 
        }
        else{
        
            $comportamentoPet = array(
                "idPet" => $idPet,
                "idComportamento"=> $idComportamento
        
            
            );

            
          
            // echo($nome);
            // die;
        // echo(inserirPet($pets));
        // die;

           if (inserirPetComportamento($comportamentoPet)) 
                echo ("
                    <script>
                        alert('foi inserido');
                        window.location.href = '../indexVacinaPet.php';
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