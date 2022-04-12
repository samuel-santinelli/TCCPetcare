<?php


require_once(SRC. 'bd/listarSexo.php');

function exibirSexo(){
    $dadosListar = listarSexo();
    return $dadosListar;
}

function criarArraySexo($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "idSexo" => $exibirDados['idSexo'],
            "nomeSexo" => $exibirDados['nomeSexo']
        
        );

        $cont +=1; 
    }
 
  
 
    if(isset($arrayDados)){
        return $arrayDados;
    }else{
        return false;
    }
}


function criarJsonSexo($arrayDados)
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