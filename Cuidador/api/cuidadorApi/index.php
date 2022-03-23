<?php



require_once("vendor/autoload.php");
require_once("../control/exibirHost.php");
require_once('../control/recebeCuidadoresAPI.php');

$config = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$app = new \Slim\App($config);



$app->get('/cuidador', function($request, $response, $args){

    if($listar = exibirHost()){
        if( $listarDadosArray = criarArrayHost($listar)){  
            $listarDadosJSON = criarJSONHost($listarDadosArray);
             }
    }
       if($listarDadosArray){
        return $response   ->withStatus(200) 
        ->withHeader('Content-Type', 'application/json') 
        ->write($listarDadosJSON);
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
            if(inserirCuidadorAPI($dadosBodyJSON)){ 
                return $response    ->withStatus(201)
                                    ->withHeader('Content-Type', 'application/json')
                                    ->write('{"message":"Item criado com sucesso"}');
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

?>