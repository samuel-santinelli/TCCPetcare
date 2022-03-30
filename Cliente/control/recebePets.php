<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirPets.php');





$nome = (string)null;
$deficiencia = (int) null;
$descricao = (string) null;
$castrado = (string) null;
$foto = (string) '';
$dataNascimento = (string) null;
$avaliacao = (int) 0;
$idRaca = (int) 0;
$idEspecie = (int) 0;
$idFase = (int) 0;
$idCliente = (int) 0;





if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $nome = $_POST['nome'];
    // echo($nome);
    // die;
    $deficiencia = $_POST['deficiencia'];
    $descricao = $_POST['descricao'];
    $castrado = $_POST['castrado'];
    // $foto = $_POST['fleFoto'];
    $dataNascimento = $_POST['dataNascimento'];
    $avaliacao = $_POST['avaliacao'];
    $idRaca = $_POST['sltraca'];
    $idEspecie = $_POST['sltEspecie'];
    $idFase = $_POST['sltFases'];
    $idCliente = $_POST['sltClientes'];

  
    // if($_FILES['fleFoto'] ['name'] != "") 
    //     {
    //          $foto = uploadFile($_FILES['fleFoto']); 
    //          unlink(SRC.NOME_DIRETORIO_FILE.$nomeFoto ); 
    //          //  echo($foto);
    //     }else{
    //         $foto = $nomeFoto;
    //     }



    if($nome == '')
    {
        echo ("<script> 
            alert('Preencha todos os campos');
            window.history.back();
        </script>");  
    }
        
    elseif(strlen($nome)>100)
        {
              echo ("<script> 
            alert('Maximo de caracter');
            window.history.back(); 
        </script>"); 
        }
        else{
        
            $pets = array(
                "nome" => $nome,
                "deficiencia" => $deficiencia,
                "descricao" => $descricao,
                "castrado" => $castrado,
                "dataNascimento"  => $dataNascimento,
                "avaliacao" => $avaliacao ,
                "idRaca" =>$idRaca,
                "idEspecie" => $idEspecie,
                "idFase"=> $idFase,
                "idCliente"=> $idCliente
            
            );

            
          
            // echo($nome);
            // die;
        // echo(inserirPet($pets));
        // die;

           if (inserirPet($pets)) 
                echo ("
                    <script>
                        alert('foi inserido');
                        window.location.href = '../indexPets.php';
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


























// if($_SERVER['REQUEST_METHOD'] == 'POST'){
   
    

//     if($nome == ''){
//         echo('Caixa vaiza');
//     }else{
//         $pets = array(
//             $nome => "nome",
//             $deficiencia => "deficiencia",
//             $descricao = "descricao",
//             $castrado => "castrado",
//             $foto => "foto",
//             $dataNascimento => "dataNascimento",
//             $avaliacao => "avaliacao",
//             $idRaca => "idRaca",
//             $idEspecie => "idEspecie",
//             $idFase => "idFase"
          
//         );
         
      
//             if(inserirPet($pets)){
//                 echo("Foi o inserir - recebe");
//             }else{
//                 echo("Nao foi - recebe");
//             }

        
//     }


// }





?>