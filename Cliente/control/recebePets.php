<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirPets.php');
require_once(SRC.'bd/inserirVacinaPet.php');
require_once(SRC .'bd/listarClientes.php');
require_once(SRC.'bd/updatePet.php');
require_once(SRC.'config/upload.php');
require_once(SRC.'control/exibirVacinas.php');
require_once(SRC."control/exibirPets.php");
// $idVacina= $_GET['idVacina'];
//   echo ($idVacina);

//   $dados= buscaVacina($idVacina); 

$nome = (string)null;
$deficiencia = (int) null;
$descricao = (string) null;
$castrado = (string) null;
$foto = (string) null;
$dataNascimento = (string) null;
$avaliacao = (int) 0;
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

    $nome = $_POST['nome'];
    // echo($nome);
    // die;
    // $deficiencia = $_POST['deficiencia'];
    $descricao = $_POST['descricao'];
    // $castrado = $_POST['castrado'];
    
    $dataNascimento = $_POST['dataNascimento'];
    $avaliacao = $_POST['avaliacao'];
    $idRaca = $_POST['sltraca'];
    $idEspecie = $_POST['sltEspecie'];
    $idFases = $_POST['sltFases'];
    $idVacina = $_POST['sltVacina'];
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
                "avaliacao" => $avaliacao ,
                "idRaca" =>$idRaca,
                "idEspecie" => $idEspecie,
                "idFase"=> $idFases,
                "idCliente"=> $idCliente,
                "idPet" => $idPet
            
            );

            
          
            // echo($nome);
            // die;
        // echo(inserirPet($pets));
        // die;
        if(strtoupper($_GET['modo']) == 'SALVAR'){
                
           
            //chama a função inserir do arquivo inserirCliente.php, e encaminha o array com os dados do cliente.
           if (inserirPet($pets, $idPet)) //tratamento para ver se os dados chegaram no banco
               { 
                $sql = "insert into tblPets(
                    nome,
                    deficiencia,
                    descricao,
                    castrado,
                    foto,
                    dataNascimento,
                    avaliacao,
                    idRaca,
                    idEspecie,
                    idFase,
                    idCliente
                   
                  
                )
                values(
                    nome,
                    deficiencia,
                    descricao,
                    castrado,
                    foto,
                    dataNascimento,
                    avaliacao,
                    idRaca,
                    idEspecie,
                    idFase,
                    idCliente
            
                     )
            ";

              if(  $conexao = conexao()){
                  echo('foi');
              }else{
                  echo("nao");
              }


                mysqli_query($conexao, $sql);
                // printf ( mysqli_insert_id($conexao));
                $idPet =  mysqli_insert_id($conexao);
                echo($idPet);
                // $dados = exibirPets();
                // die;
                // $exibirPets = mysqli_fetch_assoc($dados);
                   echo (
                   "
                   <script>
                       alert('foi inserido');
                       window.location.href = '../indexVacinaPet.php?idPet=$idPet';
                   </script>
                   " 
                    );
                    die;
                }
            else
               {
                echo ("
                nao foi
             ");
             die;
               }
            }elseif(strtoupper($_GET['modo']) == 'ATUALIZAR')//logica para o atualizar
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







?>