<?php

// require_once("config/config.php");
require_once(SRC."bd/listarRaca.php");


function exibirRaca(){
    $dados = listarRaca();
    return $dados;
}

function criarArrayRaca($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "id" => $exibirDados['idRaca'],
            "nomeRaca" => $exibirDados['nomeRaca'],
            "idPorte" =>$exibirDados['idPorte']
            
           
        );

        $cont +=1; 
    }
 
  
 
    if(isset($arrayDados)){
        return $arrayDados;
    }else{
        return false;
    }
}


function criarJsonRaca($arrayDados)
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