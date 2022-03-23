<?php


require_once(SRC. 'bd/listarHost.php');

function exibirHost(){
    $dadosListar = listarHost();
    return $dadosListar;
}

      
function criarArrayHost($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "id" => $exibirDados['idHost'],
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
            "avaliacao" => $exibirDados['avaliacao'],
            "idSexoHost" =>$exibirDados['idSexoHost'],
            "sobrenome" => $exibirDados['sobrenome']
            
           
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