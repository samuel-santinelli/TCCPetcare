<?php

// require_once("config/config.php");
require_once(SRC."bd/listarVacinaPet.php");


function exibirPetVacina(){
    $dados = listarPetVacina();
    return $dados;
}
// function buscarNomeClientes($nome){
//     $dados = buscarNome($nome);

//     return $dados;
// }

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