<?php


require_once(SRC. 'bd/listarHost.php');

function exibirHost(){
    $dadosListar = listarHost();
    return $dadosListar;
}
function buscarNomeCuidadores($nome){
    $dados = buscarNome($nome);

    return $dados;
}
function buscarCuidadores($id)
{
   
   $dados = buscarCuidador($id);
    
    return $dados;
    
    
}
function buscarCuidadoresId($id)
{
   
   $dados = buscaHostId($id);
    
    return $dados;
    
    
}


      
function criarArrayHost($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "idHost" => $exibirDados['idHost'],
            "nome" => $exibirDados['nome'],
            "dataNascimento" => $exibirDados['dataNascimento'],
            "cpf" => $exibirDados['cpf'],
            "email" => $exibirDados['email'],
            "senha" => $exibirDados['senha'],
            "foto" => $exibirDados['foto'],
            "biografia" => $exibirDados['biografia'],
            "possuiAnimais" => $exibirDados['possuiAnimais'],
            "possuiCriancas" => $exibirDados['possuiCriancas'],
            "preferencias" => $exibirDados['preferencias'],
            "moradia" => $exibirDados['moradia'],
            "limitacoes" => $exibirDados['limitacoes'],
            "idSexoHost" =>$exibirDados['idSexoHost'],
            "cep" => $exibirDados['cep'],
            "endereco" => $exibirDados['endereco'],
            "bairro" => $exibirDados['bairro'],         
            "cidade"   => $exibirDados['cidade'],
            "complemento" => $exibirDados['complemento'],
            "numero" => $exibirDados['numero'],
            "valorHora" => $exibirDados['valorHora']
            
           
        );

        $cont +=1; 
    }
 
  
 
    if(isset($arrayDados)){
        return $arrayDados;
    }else{
        return false;
    }
}


function criarJSONHost($arrayDados)
{
    
    header("content-type:application/json");

    $listarJSON = json_encode($arrayDados); 


    if(isset($listarJSON)){
        return $listarJSON;
     }else{
         return false;
    }
}

?>