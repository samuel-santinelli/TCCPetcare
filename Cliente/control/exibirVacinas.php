<?php


require_once(SRC. 'bd/listarVacinas.php');

function exibirVacinas(){
    $dadosListar = listarVacinas();
    return $dadosListar;
}

function buscaVacina($idVacina){
   
    $sql = "select * from tblVacinas where tblVacinas.idVacina = ".$idVacina;

    $conexao = conexao();

    $select = mysqli_query($conexao,$sql);

    return $select;
}

function arrayVacinas($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "idVacina" => $exibirDados['idVacina'],
            "nomeVacina" => $exibirDados['nomeVacina']
            
           
        );

        $cont +=1; 
    }
 
  
 
    if(isset($arrayDados)){
        return $arrayDados;
    }else{
        return false;
    }
}


function jsonVacinas($arrayDados)
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