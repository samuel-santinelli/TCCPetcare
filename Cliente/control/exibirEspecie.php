<?php


// require_once("config/config.php");
require_once(SRC."bd/listarEspecie.php");


function exibirEspecie(){
    $dados = listarEspecie();
    return $dados;
}

function criarArrayEspecie($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "idEspecie" => $exibirDados['idEspecie'],
            "nomeEspecie" => $exibirDados['nomeEspecie']
        
        );

        $cont +=1; 
    }
 
  
 
    if(isset($arrayDados)){
        return $arrayDados;
    }else{
        return false;
    }
}


function criarJsonExpecie($arrayDados)
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