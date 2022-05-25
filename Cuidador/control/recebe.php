<?php


require_once('../bd/inserir.php');
require_once('../config/config.php');
require_once(SRC .'bd/update.php');
require_once(SRC.'config/upload.php');


$nome = (string) null;
// $sobrenome = (string) null;
$email = (string) null;
$senha = (string) null;
$confirmarSenha = (string) null;
$limitacoes = (string) null;
$moradia = (string) null;
$preferencias = (string) null;
$data = (string) null;
$biografia = (string) null;
 $idAgendaHost =  ( int )null;
$idSexoHost =  ( int )null;
$possuiAnimais = (int) 0;
$possuiCriancas = (int) 0;
$numero =  ( int )null;
$endereco = (string) null;
$bairro = (string) null;
$cep = (string) null;
$complemento = (string) null;
$cidade = (string) null;
$valorHora = (double) null;
$foto = (string) null; 
$telefone = (string) null;

if(isset($_GET['id'])){
    $id = (int) $_GET['id'];
}
else{
  $id = (int) 0; 
} 



if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $nome = $_POST['inputNome'];
    $data = $_POST['inputData'];
    // $sobrenome = $_POST['inputSobrenome'];
    $email = $_POST['inputEmail'];
    $senha= md5($_POST['inputSenha']);
    $confirmarSenha = $_POST['inputConfirmarSenha'];
    $cpf = $_POST['inputCPF'];
    $limitacoes = $_POST['limitacoes'];
    $moradia = $_POST['inputMoradia'];
    $preferencias = $_POST['inputPreferencias'];
    $biografia = $_POST['inputBiografia'];
    $cep = $_POST['cep'];
    $endereco = $_POST['endereco'];
    $bairro = $_POST['bairro'];
    $cidade = $_POST['cidade'];
    $complemento = $_POST['complemento'];
    $numero = $_POST['numero'];
    $valorHora = $_POST['valorHora'];
    $telefone = $_POST['telefone'];
    if(isset( $_POST['possuiAnimais'])){
       $possuiAnimais = 1;
    } else{
        $possuiAnimais = 0;
    } 
    if(isset( $_POST['possuiCriancas'])){
        $possuiCriancas = 1;
     } else{
         $possuiCriancas = 0;
     }     


   $possuiCriancas;
    $idSexoHost = $_POST['sltSexo'];

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



    if($nome == '' ||  $cpf == '' || $email == '' || $senha == '' || $biografia == '' || $moradia == '' || $limitacoes == ''|| $preferencias =='' ||  $confirmarSenha == '')
    {
        echo ("<script> 
            alert('Preencha todos os campos');
            window.history.back();
        </script>");  
    }
        
    elseif(strlen($nome)>100 || strlen($biografia) >15 || strlen($cpf) > 20)
        {
              echo ("<script> 
            alert('Maximo de caracter');
            window.history.back(); 
        </script>"); 
        }
        else{
        
            $cuidador = array(
                "nome" => $nome,
                "dataNascimento" => $data,
                "cpf" => $cpf,
                "email" => $email,
                "senha" => $senha,
                "foto" => $foto,
                "biografia" => $biografia,
                "possuiAnimais" => $possuiAnimais,
                "possuiCriancas" => $possuiCriancas,
                "preferencias" => $preferencias,
                "moradia" => $moradia,
                "limitacoes" => $limitacoes,
                "idSexoHost" => $idSexoHost,
                "id" => $id,
                "cep" => $cep,
                "endereco" => $endereco,
                 "bairro"=>$bairro,
                 "cidade"=>$cidade,
                 "complemento"=>$complemento,
                 "numero"=>$numero,
                 "valorHora" => $valorHora,
                 "telefone" => $telefone
               
            
            );
            if(strtoupper($_GET['modo']) == 'SALVAR'){
                
           
            //chama a função inserir do arquivo inserirCliente.php, e encaminha o array com os dados do cliente.
           if (inserir($cuidador)) //tratamento para ver se os dados chegaram no banco
        
           echo ("
                    <script>
                        alert('foi inserido');
                        window.location.href = '../index.php';
                    </script>
                    " );
            else
                echo ("
                    <script>
                        alert('nao foi inserido');
                         window.history.back();
                    </script>
                ");
            }elseif(strtoupper($_GET['modo']) == 'ATUALIZAR')
            { 
                // edita($cuidador);
               //  die;
                if(edita($cuidador))
                echo("
                <script>
                    alert('foi atualizado');
                    window.location.href = '../index.php';
                    </script>
            " );
                
                    
                    else
                        echo ("
                            <script>
                            alert('nao foi atualizado');
                            window.history.back();
                            </script>
                        ");
                
            }
        }




}








?>

