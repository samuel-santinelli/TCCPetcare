<?php

require_once(SRC. 'bd/listarHistorico.php');

function exibirHistorico(){
    $dadosListar = listarHistorico();
    return $dadosListar;
}

function criarArrayHistorico($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "idServico" => $exibirDados['idServico'],
            "valor" => $exibirDados['valor'],
            "dataInicial" => $exibirDados['dataInicial'],
            "dataFinal" => $exibirDados['dataFinal'],
            "nomePet" =>$exibirDados['nomePet'],
            "foto" =>$exibirDados['foto'],
            "nomeTipo" =>$exibirDados['nomeTipo']
           
        );

        $cont +=1; 
    }
 
  
 
    if(isset($arrayDados)){
        return $arrayDados;
    }else{
        return false;
    }
}


function criarJSONHistorico($arrayDados)
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