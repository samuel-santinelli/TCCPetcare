<?php


// require_once("config/config.php");
require_once(SRC."bd/listarFase.php");


function exibirFase(){
    $dados = listarFase();
    return $dados;
}

function criarArrayFase($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "idFase" => $exibirDados['idFase'],
            "tipo" => $exibirDados['tipo']
        
        );

        $cont +=1; 
    }
 
  
 
    if(isset($arrayDados)){
        return $arrayDados;
    }else{
        return false;
    }
}


function criarJsonFase($arrayDados)
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