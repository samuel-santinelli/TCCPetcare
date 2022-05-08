<?php


require_once('../bd/inserirComportamento.php');
require_once('../config/config.php');




$docil = (int) 0;
$temperamental = (int) 0;
$sistematico = (int) 0;
$antissocial = (int) 0;
$ciumento = (int) 0;
$acanhoso = (int) 0;
$guloso = (int) 0;
$bravo = (int) 0;





if($_SERVER['REQUEST_METHOD'] == 'POST'){
 

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


  



        
    if($docil == '')
        {
            echo ("<script> 
            alert('Preencha todos os campos');
            window.history.back();
        </script>"); 
        }
        else{
        
            $comportamento = array(
             
                "docil" => $docil,
                "temperamental" => $temperamental,
                "sistematico" => $sistematico,
                "antissocial" => $antissocial,
                "ciumento" => $ciumento,
                "acanhoso" => $acanhoso,
                "guloso" => $guloso,
                "bravo" => $bravo

               
            
            );
         
                
           
           
           if (inserirComportamento($comportamento, $idComportamento))
               {
                $sql = "insert into tblTeste 
                (
                    docil,
                    temperamental,
                    sistematico,
                    antissocial,
                    ciumento,
                    acanhoso,
                    guloso,
                    bravo
                    )
                values(
                    docil,
                    temperamental,
                    sistematico,
                    antissocial,
                    ciumento,
                    acanhoso,
                    guloso,
                    bravo
                )";
            
                    $conexao = conexao();
            // echo($sql);
            // die;
            
            
            // if(mysqli_query($conexao, $sql)){
            //     return true;
            // }
            // else{
            //     return false;
            // }
            mysqli_query($conexao, $sql);
            // printf ( mysqli_insert_id($conexao));
            $idComportamento =  mysqli_insert_id($conexao);
            // echo($idComportamento);
            // echo($sql);
            // die;
            
               
                  // $dados = exibirPets();
                  // die;
                  // $exibirPets = mysqli_fetch_assoc($dados);
                     echo (
                     "
                     <script>
                         alert('foi inserido');
                         window.location.href = '../indexComportamentoPet.php?idComportamento=$idComportamento';
                     </script>
                     " 
                      ); 
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

