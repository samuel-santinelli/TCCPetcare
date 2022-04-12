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

function criarArrayVacinas($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "idPetVacina" => $exibirDados['idPetVacina'],
            "idPet" => $exibirDados['idPet'],
            "idVacina" =>$exibirDados['idVacina']
            
           
        );

        $cont +=1; 
    }
 
  
 
    if(isset($arrayDados)){
        return $arrayDados;
    }else{
        return false;
    }
}


function criarJsonVacinas($arrayDados)
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