<?php


require_once(SRC. 'bd/listarAgenda.php');

function exibirAgenda(){
    $dadosListar = listarAgenda();
    return $dadosListar;
}


      
function criarArrayAgenda($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "idServico" => $exibirDados['idServico'],
            "nome" => $exibirDados['nome'],
            "cpf" => $exibirDados['cpf'],
            "endereco" => $exibirDados['endereco'],
            "valor" => $exibirDados['valor'],
            "dataInicial" => $exibirDados['dataInicial'],
            "dataFinal" => $exibirDados['dataFinal'],
            "idHost" =>$exibirDados['idHost'],
            "idPet" =>$exibirDados['idPet'],
            "idTipo" =>$exibirDados['idTipo'],
            "idCliente" =>$exibirDados['idCliente'],
            "status" =>$exibirDados['status']
           
        );

        $cont +=1; 
    }
 
  
    if(isset($arrayDados)){
        return $arrayDados;
    }else{
        return false;
    }
}


function criarJSONAgenda($arrayDados)
{
    
    header("content-type:application/json");

    $listarJSON = json_encode($arrayDados); 


    if(isset($listarJSON)){
        return $listarJSON;
     }else{
         return false;
    }
}

function criarArrayAgendaServico($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "idServico" => $exibirDados['idServico'],
            "valor" => $exibirDados['valor'],
            "dataInicial" => $exibirDados['dataInicial'],
            "dataFinal" => $exibirDados['dataFinal'],
            "idHost" =>$exibirDados['idHost'],
            "idPet" =>$exibirDados['idPet'],
            "idTipo" =>$exibirDados['idTipo'],
            "idCliente" =>$exibirDados['idCliente']
           
        );

        $cont +=1; 
    }
 
  
 
    if(isset($arrayDados)){
        return $arrayDados;
    }else{
        return false;
    }
}


function criarJSONAgendaServico($arrayDados)
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