<?php

// require_once("config/config.php");
require_once(SRC."bd/listarPets.php");


function exibirPets(){
    $dados = listarPets();
    return $dados;
}
// function buscarNomeClientes($nome){
//     $dados = buscarNome($nome);

//     return $dados;
// }
function criarArrayPet($objeto)
{
    $cont = (int) 0;

    
    while($exibirDados = mysqli_fetch_assoc($objeto))
    {
        
        $arrayDados[$cont] = array( 
            "id" => $exibirDados['idPet'],
            "nome" => $exibirDados['nome'],
            "deficiencia" => $exibirDados['deficiencia'],
            "descricao" => $exibirDados['descricao'],
            "castrado" => $exibirDados['castrado'],
            "foto" => $exibirDados['foto'],
            "dataNascimento" => $exibirDados['dataNascimento'],
            "avaliacao" => $exibirDados['avaliacao'],
            "idRaca" =>$exibirDados['idRaca'],
            "idFase" =>$exibirDados['idFase'],
            "idEspecie" =>$exibirDados['idEspecie'],
            "idCliente" =>$exibirDados['idCliente']
            
           
        );
        $arrayDadosVacina[$cont] = array( 
            "idPetVacina" => $exibirDados['idPetVacina'],
            "idPet" => $exibirDados['idPet'],
            "idVacina" =>$exibirDados['idVacina']
            
           
        );

        $cont +=1; 
    }
 
  
 
    if(isset($arrayDados)){
        return $arrayDados;
    }elseif(isset($arrayDadosVacina)){
        return $arrayDadosVacina;
    }else{
        return false;
    }
}


function criarJsonPet($arrayDados)
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