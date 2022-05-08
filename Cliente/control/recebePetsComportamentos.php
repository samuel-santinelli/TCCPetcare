<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirComportamentoPet.php');
require_once(SRC.'control/exibirVacinas.php');
require_once(SRC.'bd/listarPets.php');
require_once(SRC."control/exibirPets.php");
require_once(SRC.'bd/inserirComportamento.php');
require_once(SRC. 'control/exibirComportamentoPet.php');
$idPet = (int)null;
$idComportamento = (int)null;
$docil = (int) 0;
$temperamental = (int) 0;
$sistematico = (int) 0;
$antissocial = (int) 0;
$ciumento = (int) 0;
$acanhoso = (int) 0;
$guloso = (int) 0;
$bravo = (int) 0;

$idComportamento= $_GET['idComportamento'];
//   echo ($idComportamento);

  $dados= buscaComportamentoPet($idComportamento); 
//   $idPet= $_GET['idPet'];
//   echo ($idPet);

//   $dados= buscaPet($idPet); 


if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $idPet = $_POST['idPet'];
    // $idComportamento = $_POST['idComportamento'];
    // echo($nome);
    // die;

    if(isset( $_POST['docil'])){
        $docil = 1;
     } else{
         $docil = 0;
     } 
     if(isset( $_POST['temperamental'])){
         $temperamental = 1;
      } else{
          $temperamental = 0;
      }  
      if(isset( $_POST['sistematico'])){
         $sistematico = 1;
      } else{
          $sistematico = 0;
      }   
      if(isset( $_POST['antissocial'])){
         $antissocial = 1;
      } else{
          $antissocial = 0;
      }   
      if(isset( $_POST['ciumento'])){
         $ciumento = 1;
      } else{
          $ciumento = 0;
      }   
      if(isset( $_POST['acanhoso'])){
         $acanhoso = 1;
      } else{
          $acanhoso = 0;
      }   
      if(isset( $_POST['guloso'])){
         $guloso = 1;
      } else{
          $guloso = 0;
      }   
      if(isset( $_POST['bravo'])){
         $bravo = 1;
      } else{
          $bravo = 0;
      }     



        
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
        // echo(inserirPetComportamento($pets));
        // die;

           if (inserirPetComportamento($comportamentoPet)) 
             {

                
                echo ("
                foi
                  " );
                //   die;
             }
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