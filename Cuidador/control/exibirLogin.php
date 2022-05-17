<?php

require_once(SRC."bd/listarLogin.php");
function exibirLoginSenha($login, $senha){
    $dados = listarLogin($login, $senha);

    return $dados;
}
function buscarLoginSenha($login, $senha){
    $dados = buscaLogin($login, $senha);

    return $dados;
}
function criarArray($objeto)
{
    $cont = (int) 0;//contador

    //Estrutura de repetição para pegar um objeto de dados e converter em um array
    while($rsDados = mysqli_fetch_assoc($objeto))
    {
         //objeto array
        $arrayDados[$cont] = array( 
            "idCliente" => $rsDados['idCliente'],
            "email" => $rsDados['email'],
            "senha" => $rsDados['senha'],
         
        );
        // echo($arrayDados);
        // die;
        $cont +=1; //contador
    }
    //Depois tem que dar o return, pode acontecer de alguem solicitar essa busca no banco e o banco pode estar vazio, ai ele não vai entrar no while
    if(isset($arrayDados)){ // Tratamento para validar se existe dados no banco, se não houver o retorno deverá ser false
        return $arrayDados;
    }else{
        return false;
    }
}

//Função para gerar um JSON, com base em um array de dados
function criarJSON($arrayDados)
{
    //especifica no cabeçalho do php que será gerado um JSON
    header("content-type:application/json");//cabeçalho dos dados que vão ser gerado, do php

    $listJSON = json_encode($arrayDados); // converte um array em Json

    /*
        json_encode() - converte um array em formato JSON
        json_decode() - converte um JSON em formato array
    */

    if(isset($listJSON)){
        return $listJSON;
     }else{
         return false;
    }
}
?>