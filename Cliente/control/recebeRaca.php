<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirRaca.php');





$nomeRaca= (string)null;
$idPorte= (int)0;




if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $nomeRaca = $_POST['nome'];
    $idPorte = $_POST['sltPorte'];
    // echo($nome);
    // die;



    if($nomeRaca == '')
    {
        echo ("<script> 
            alert('Preencha todos os campos');
            window.history.back();
        </script>");  
    }
        
    elseif(strlen($nomeRaca)>100)
        {
              echo ("<script> 
            alert('Maximo de caracter');
            window.history.back(); 
        </script>"); 
        }
        else{
        
            $raca = array(
                "nome" => $nomeRaca,
                "idPorte" => $idPorte
        
            
            );

            
          
            // echo($nome);
            // die;
        // echo(inserirRaca($raca));
        // die;

           if (inserirRaca($raca)) 
                echo ("
                    <script>
                        alert('foi inserido');
                        window.location.href = '../indexRaca.php';
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