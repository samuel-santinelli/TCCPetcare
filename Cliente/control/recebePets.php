<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirPets.php');
require_once(SRC.'bd/inserirVacinaPet.php');
require_once(SRC.'bd/inserirComportamento.php');
require_once(SRC .'bd/listarClientes.php');
require_once(SRC.'bd/updatePet.php');
require_once(SRC.'config/upload.php');
require_once(SRC.'control/exibirVacinas.php');
require_once(SRC."control/exibirPets.php");
// $idVacina= $_GET['idVacina'];
//   echo ($idVacina);

//   $dados= buscaVacina($idVacina); 


// $docil = (int) 0;
// $temperamental = (int) 0;
// $sistematico = (int) 0;
// $antissocial = (int) 0;
// $ciumento = (int) 0;
// $acanhoso = (int) 0;
// $guloso = (int) 0;
// $bravo = (int) 0;


$nome = (string)null;
$deficiencia = (int) null;
$descricao = (string) null;
$castrado = (string) null;
$foto = (string) null;
$dataNascimento = (string) null;
// $avaliacao = (int) 0;
$idRaca = (int) 0;
$idEspecie = (int) 0;
$idFases = (int) 0;
$idCliente = (int) 0;
$idPet = (int) 0;
$idCliente= $_GET['id'];
//   echo ($idCliente);
  $dados= buscaCliente($idCliente);

  if(isset($_GET['idPet'])){
    $idPet = (int) $_GET['idPet'];
    // echo($idPet);
    // die;
}
else{
  $idPet = (int) 0; 
} 

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    
    // if(isset( $_POST['docil'])){
    //     $docil = 1;
    //  } else{
    //      $docil = 0;
    //  } 
    //  if(isset( $_POST['temperamental'])){
    //      $temperamental = 1;
    //   } else{
    //       $temperamental = 0;
    //   }  
    //   if(isset( $_POST['sistematico'])){
    //      $sistematico = 1;
    //   } else{
    //       $sistematico = 0;
    //   }   
    //   if(isset( $_POST['antissocial'])){
    //      $antissocial = 1;
    //   } else{
    //       $antissocial = 0;
    //   }   
    //   if(isset( $_POST['ciumento'])){
    //      $ciumento = 1;
    //   } else{
    //       $ciumento = 0;
    //   }   
    //   if(isset( $_POST['acanhoso'])){
    //      $acanhoso = 1;
    //   } else{
    //       $acanhoso = 0;
    //   }   
    //   if(isset( $_POST['guloso'])){
    //      $guloso = 1;
    //   } else{
    //       $guloso = 0;
    //   }   
    //   if(isset( $_POST['bravo'])){
    //      $bravo = 1;
    //   } else{
    //       $bravo = 0;
    //   }      
 
 
   


    $nome = $_POST['nome'];
    // echo($nome);
    // die;
    // $deficiencia = $_POST['deficiencia'];
    $descricao = $_POST['descricao'];
    // $castrado = $_POST['castrado'];
    
    $dataNascimento = $_POST['dataNascimento'];
    $idRaca = $_POST['sltraca'];
    $idEspecie = $_POST['sltEspecie'];
    $idFases = $_POST['sltFases'];
    $idVacina = $_POST['sltVacina'];
    $comportamento = $_POST['comportamento'];
    // $idCliente = $_POST['idCliente'];
    if(isset( $_POST['deficiencia'])){
        $deficiencia = 1;
     } else{
         $deficiencia = 0;
     } 
     if(isset( $_POST['castrado'])){
         $castrado = 1;
      } else{
          $castrado = 0;
      }     
 
      $nomeFoto = $_GET['nomeFoto'];
      if(strtoupper($_GET['modo']) == 'ATUALIZAR')
        {
            if($_FILES['fleFoto'] ['name'] != "") //tratamento para ver se a foto veio vazia
            {
                 $foto = uploadFile($_FILES['fleFoto']); // chamando a função que faz o upload de um arquivo
                 unlink(SRC.NOME_DIRETORIO_FILE.$nomeFoto ); // unlink() -  Apaga a imagem antiga
            }else{
                $foto = $nomeFoto;
            }
        }else{ // esse else - caso a variavel modo seja "SALVAR", então será obrigatório o upload da foto
            $foto = uploadFile($_FILES['fleFoto']); 
        }



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
                "foto" => $foto,
                "dataNascimento"  => $dataNascimento,
                "idRaca" =>$idRaca,
                "idEspecie" => $idEspecie,
                "idFase"=> $idFases,
                "idCliente"=> $idCliente,
                "idPet" => $idPet,
                "comportamento" => $comportamento,
                "idVacina" => $idVacina
            
            );

         
         
            
          
            // echo($nome);
            // die;
        // echo(inserirPet($pets));
        // die;
        if(strtoupper($_GET['modo']) == 'SALVAR'){
                
           
            //chama a função inserir do arquivo inserirCliente.php, e encaminha o array com os dados do cliente.
           if (inserirPet($pets)) //tratamento para ver se os dados chegaram no banco
               
            echo (
                "
                <script>
                    alert('foi inserido');
                    window.location.href = '../indexPets.php';
                  
                    
                </script>
                " 
                 );
        
                    

           
            elseif(strtoupper($_GET['modo']) == 'ATUALIZAR')//logica para o atualizar
            { 
                //  editaPet($pets);
                
                if(editaPet($pets))
                     echo ("
                        <script>
                            alert('Foi atualizado');
                            window.location.href = '../indexPets.php';
                            </script>
                    " );
                    else
                        echo ("
                            <script>
                            alert('Não foi atualizado');
                            window.history.back();
                            </script>
                        ");
                
            }
        
        }




}



}



?>