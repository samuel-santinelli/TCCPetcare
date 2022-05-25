<?php


require_once('../bd/inserirCliente.php');

require_once('../config/config.php');
require_once(SRC.'config/upload.php');
require_once(SRC .'bd/updateCliente.php');


$nome = (string) null;
$email = (string) null;
$senha = (string) null;
$confirmarSenha = (string) null;
$idSexo =  ( int )null;
$data = (string) null;
$telefone = (string) null;
$foto = (string) null;
$numero =  ( int )null;
$endereco = (string) null;
$bairro = (string) null;
$cep = (string) null;
$complemento = (string) null;
$cidade = (string) null;
$telefone  =(string) null;
if(isset($_GET['id'])){
    $id = (int) $_GET['id'];
}
else{
  $id = (int) 0; 
} 


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $nome = $_POST['inputNome'];
    $email = $_POST['inputEmail'];
    $data = $_POST['inputData'];
     $senha= md5($_POST['inputSenha']);
    $confirmarSenha = $_POST['inputConfirmarSenha'];
    $cpf = $_POST['inputCPF'];
    $telefone = $_POST['telefone'];
    $cep = $_POST['cep'];
    $endereco = $_POST['endereco'];
    $bairro = $_POST['bairro'];
    $cidade = $_POST['cidade'];
    $complemento = $_POST['complemento'];
    $numero = $_POST['numero'];
    $idSexo = $_POST['sltSexo'];
    $telefone = $_POST['telefone'];
    
    $nomeFoto = $_GET['nomeFoto']; 
    if(strtoupper($_GET['modo']) == 'ATUALIZAR')
    {
        if($_FILES['fleFoto'] ['name'] != "") 
        {
             $foto = uploadFile($_FILES['fleFoto']); 
             unlink(SRC.NOME_DIRETORIO_FILE.$nomeFoto ); 
             //  echo($foto);
        }else{
            $foto = $nomeFoto;
        }
    }else{ 
        $foto = uploadFile($_FILES['fleFoto']); 
    }



    if($nome == '' ||  $cpf == '' || $email == '' )
    {
        echo ("<script> 
            alert('Preencha todos os campos');
            window.history.back();
        </script>");  
    }
        
    elseif(strlen($nome)>100 || strlen($email) >15 || strlen($cpf) > 20)
        {
              echo ("<script> 
            alert('Maximo de caracter');
            window.history.back(); 
        </script>"); 
        }
        else{
        
            $cliente = array(
                "nome" => $nome,
                "cpf" => $cpf,
                "dataNascimento" => $data,
                "foto" => $foto,
                "email" => $email,
               "senha" =>  $senha,
                "idSexo" => $idSexo,
                "telefone" => $telefone,
                "id" => $id,
                "cep" => $cep,
               "endereco" => $endereco,
                "bairro"=>$bairro,
                "cidade"=>$cidade,
                "complemento"=>$complemento,
                "numero"=>$numero,
                "telefone" => $telefone

               
            
            );
               //validacao para saber se é para inserir um novo registro ou se é para atualizar um registro existente no bd
               if(strtoupper($_GET['modo']) == 'SALVAR'){
                
           
                //chama a função inserir do arquivo inserirCliente.php, e encaminha o array com os dados do cliente.
               if (inserirCliente($cliente)) //tratamento para ver se os dados chegaram no banco
                 {
               
                
                       echo (
                       "
                       <script>
                           alert('foi inserido');
                           window.location.href = '../indexAddPet.php';
                          
                           
                       </script>
                       " 
                        );
                 }
               
               
               
              
                else
                    echo ("
                        <script>
                            alert('Não foi inserido');
                             window.history.back();
                        </script>
                    ");
                }elseif(strtoupper($_GET['modo']) == 'ATUALIZAR')//logica para o atualizar
                { 
                    //  editar($cliente);
                    
                    if(editaCliente($cliente))
                         echo ("
                            <script>
                                alert('foi atualizado');
                                window.location.href = '../indexCliente.php';
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

