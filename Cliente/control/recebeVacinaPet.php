<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirVacinaPet.php');
require_once(SRC.'control/exibirVacinas.php');
require_once(SRC.'bd/listarPets.php');
require_once(SRC."control/exibirPets.php");


$idPet = (int)null;
$idVacina = (int)null;

// $idVacina= $_GET['idVacina'];
//   echo ($idVacina);

//   $dados= buscaVacina($idVacina); 
  $idPet= $_GET['idPet'];
  echo ($idPet);

  $dados= buscaPet($idPet); 


if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $idPet = $_POST['idPet'];
    $idVacina = $_POST['idVacina'];
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
        
            $vacinaPet = array(
                "idPet" => $idPet,
                "idVacina"=> $idVacina
        
            
            );

            
          
            // echo($nome);
            // die;
        // echo(inserirPet($pets));
        // die;

           if (inserirVacinaPet($vacinaPet)) 
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