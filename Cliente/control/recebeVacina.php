<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirVacinas.php');





$nomeVacinas = (string)null;

$idVacina= $_GET['idVacina'];
  // echo ($idVacina);

  $dados= buscaVacina($idVacina); 




if($_SERVER['REQUEST_METHOD'] == 'POST'){

    // $nomeVacinas = $_POST['sltVacina'];
    // echo($nome);
    // die;



    if($nomeVacinas == '')
    {
        echo ("<script> 
            alert('Preencha todos os campos');
            window.history.back();
        </script>");  
    }
        
    elseif(strlen($nomeVacinas)>100)
        {
              echo ("<script> 
            alert('Maximo de caracter');
            window.history.back(); 
        </script>"); 
        }
        else{
        
            $vacinas = array(
                "nome" => $nomeVacinas
        
            
            );

            
          
            // echo($nome);
            // die;
        // echo(inserirPet($pets));
        // die;

           if (inserirVacinas($vacinas)) 
                echo ("
                    <script>
                        alert('foi inserido');
                        window.location.href = '../indexVacinas.php';
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