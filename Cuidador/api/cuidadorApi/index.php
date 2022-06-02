<?php



require_once("vendor/autoload.php");
require_once("../control/exibirHost.php");
require_once('../control/recebeCuidadoresAPI.php');
require_once("../control/exibirSexo.php");
require_once("../control/exibirLogin.php");
$config = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$app = new \Slim\App($config);

$app->get('/cuidador/loginHost', function($request, $response, $args){ 
 
    if(isset( $request ->getQueryParams()['email'])) //vendo se existe esse parametro nome, se teve a existencia da chegada de dados, parametro para filtrar pelo nome
    {

    /************** Recebendo dados pela query string */
        $login = (string) null;
        $senha = (string) null;
        $login = $request ->getQueryParams()['email']; 
        $senha = $request ->getQueryParams()['senha']; 
        if($listDados = buscarLoginSenha($login, $senha)){

                if( $listDadosArray = criarArrayHost($listDados)){  
                         $listDadosJSON = criarJSONHost($listDadosArray);
                }
        }
 
    }else{
   
  
        if($listDados =  exibirHost()){
       
            if( $listDadosArray = criarArrayCliente($listDados)){  
                     $listDadosJSON = criarJSONCLIENTE($listDadosArray); 
            }
        } 
    }

   
    if( $listDadosArray){ 
        return $response   ->withStatus(200) 
                           ->withHeader('Content-Type', 'application/json') 
                           ->write($listDadosJSON); 

    }else{
                     return $response   ->withStatus(204); 
    }
  
});


$app->get('/cuidador/listarSexoHost', function($request, $response, $args){
    
    if($listar = exibirSexo()){
        if( $listarArray = criarArraySexo($listar)){  
            $listarDadosJSON = criarJsonSexo($listarArray);
             }
    }
       if($listarArray){
        return $response   ->withStatus(200) 
        ->withHeader('Content-Type', 'application/json') 
        ->write($listarDadosJSON);
    }else{
        return $response   ->withStatus(204);
    }
  

});

$app->get('/cuidador/{id}', function($request, $response, $args){ 
    $id = $args['id']; 
 
    require_once("../control/exibirHost.php");
  
    if($listDados = buscarCuidador($id)){
     
            if( $listDadosArray = criarArrayHost($listDados)){ 
                     $listDadosJSON = criarJSONHost($listDadosArray);
            }
    } 
   
    //Validação para tratar o banco de dados sem conteúdo, (vazio), para testar se ta funcionando é só ir la no crud e excluir, ele tem que aparecer no postaman que ta vazio, e mensagem
    if( $listDadosArray){ //if para ver se tem dados no banco
        return $response   ->withStatus(200) // qual é o status que eu vou devolver desse EndPoint, response é como se fosse o echo() //6 passo
                           ->withHeader('Content-Type', 'application/json') //como minha api vai responder quando alguem solicitar, especificar qual é o tipo de cabeçalho que vai ser mandado para o body //7 passo
                           ->write($listDadosJSON); //Menssagem na tela 8 passo

    }else{
                     return $response   ->withStatus(204); // qual é o status que eu vou devolver desse EndPoint, response é como se fosse o echo() //6 passo
                                        // ->withHeader('Content-Type', 'application/json') //como minha api vai responder quando alguem solicitar, especificar quqal é o tipo de cabeçalho que vai ser mandado para o body //7 passo
                                        // ->write('{"messagem":"Não há dados para essa requisição"}'); //Menssagem na tela, falando o motivo do erro, (que não retornou nd) 8 passo
    }
 

});

$app->get('/cuidador', function($request, $response, $args){

    // if($listar = exibirHost()){
    //     if( $listarDadosArray = criarArrayHost($listar)){  
    //         $listarDadosJSON = criarJSONHost($listarDadosArray);
    //          }
    // }
    //    if($listarDadosArray){
    //     return $response   ->withStatus(200) 
    //     ->withHeader('Content-Type', 'application/json') 
    //     ->write($listarDadosJSON);
    // }else{
    //     return $response   ->withStatus(204);
    // }


    if(isset( $request ->getQueryParams()['nome'])) //vendo se existe esse parametro nome, se teve a existencia da chegada de dados, parametro para filtrar pelo nome
    {

    /************** Recebendo dados pela query string */
        $nome = (string) null;
        $nome = $request ->getQueryParams()['nome']; 

        if($listDados = buscarNomeCuidadores($nome)){

                if( $listDadosArray = criarArrayHost($listDados)){  
                         $listDadosJSON = criarJSONHost($listDadosArray);
                }
        }
 
    }else{
   
  
        if($listDados =  exibirHost()){
       
            if( $listDadosArray = criarArrayHost($listDados)){  
                     $listDadosJSON = criarJSONHost($listDadosArray); 
            }
        } 
    }

   
    if( $listDadosArray){ 
        return $response   ->withStatus(200) 
                           ->withHeader('Content-Type', 'application/json') 
                           ->write($listDadosJSON); 

    }else{
                     return $response   ->withStatus(204); 
    }
  

});





$app->post('/cuidador', function($request, $response, $args){ 

   
    $contentType = $request-> getHeaderLine('Content-Type'); 
   

    
    if($contentType == 'application/json'){
       
      
        $dadosBodyJSON = $request-> getParsedBody();
        // echo($dadosBodyJSON);
        // die;
       
        if($dadosBodyJSON == "" || $dadosBodyJSON == null) 
        {

            var_dump($dadosBodyJSON);
            die;
            return $response    ->withStatus(406)
                                ->withHeader('Content-Type', 'application/json')
                                 ->write('{"message":"Conteudo enviado pelo body não contem dados validos"}');
        }else
        {
            // var_dump($dadosBodyJSON);
            // die;
          

         
            require_once('../control/recebeCuidadoresAPI.php');
            if($resposta = inserirCuidadorAPI($dadosBodyJSON)){ 
                return $response    ->withStatus(201)
                                    ->withHeader('Content-Type', 'application/json')
                                    ->write($resposta);
            }else{
                return $response    ->withStatus(400)
                                    ->withHeader('Content-Type', 'application/json')
                                    ->write('{"message":"Não foi possível salvar os dados, por favor conferir o body da mensagem"}');
            }
          
        }

    
    }else
    {
        return $response    ->withStatus(406)
                            ->withHeader('Content-Type', 'application/json')
                            ->write('{"message":"Formato de dados do header incompatível com o padrão json"}');
    }
  
});

$app->put('/cuidador/{id}', function($request, $response, $args){ 
   

$contentType = $request-> getHeaderLine('Content-Type'); 



if($contentType == 'application/json'){ 

$dadosBodyJSON = $request-> getParsedBody();




if( $dadosBodyJSON == "" || $dadosBodyJSON == null || !isset($args['id']) || !is_numeric($args['id']) ) 
{
    return $response    ->withStatus(406)
    ->withHeader('Content-Type', 'application/json')
    ->write('{"message":"Conteudo enviado pelo body não contem dados validos"}');
}else
{

$id = $args['id']; 



if(atualizarAPI($dadosBodyJSON,$id)){
    return $response    ->withStatus(200)
    ->withHeader('Content-Type', 'application/json')
    ->write('{"message":"Item atualizado com sucesso"}');
}
else{
    return $response    ->withStatus(400)
    ->withHeader('Content-Type', 'application/json')
    ->write('{"message":"Não foi possível salvar os dados, por favor conferir o body da mensagem"}');
}

}


}
else{
    return $response    ->withStatus(406)
    ->withHeader('Content-Type', 'application/json')
    ->write('{"message":"Formato de dados do header incompatível com o padrão json"}');
}

});

$app->delete('/cuidador/{id}', function($request, $response, $args){ 
       
            
    if(!isset($args['id']) || !is_numeric($args['id']) )
    {
        return $response    ->withStatus(406)
                            ->withHeader('Content-Type', 'application/json')
                             ->write('{"message":"Não chegou o id."}');
    }else
    {
        $id = $args['id']; 

        require_once('../control/excluirApi.php');
        if(excluirCuidadorApi($id)){ 
            return $response    ->withStatus(200)
                                ->withHeader('Content-Type', 'application/json')
                                ->write('{"message":"Item excluido"}');
        }else{
            return $response    ->withStatus(400)
                                ->withHeader('Content-Type', 'application/json')
                                ->write('{"message":"Não foi possível excluir os dados"}');
        }
      
    }



});

$app->run();

// http://localhost/Cuidador/Cuidador/api/cuidador
//http://localhost/Cuidador/Cuidador/api/cuidador?nome=agrteste

?>