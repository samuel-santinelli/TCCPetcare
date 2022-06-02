<?php



require_once("vendor/autoload.php");
require_once("../control/exibirAgenda.php");
require_once('../control/recebeAgendaApi.php');
$config = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$app = new \Slim\App($config);



$app->get('/agendar', function($request, $response, $args){
    
    if($listar = exibirAgenda()){
        if( $listarArray = criarArrayAgenda($listar)){  
            $listarDadosJSON = criarJSONAgenda($listarArray);
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

$app->post('/agendar', function($request, $response, $args){ 

   
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
          

         
            
            if(inserirAgendaApi($dadosBodyJSON)){ 
                return $response    ->withStatus(201)
                                    ->withHeader('Content-Type', 'application/json')
                                    ->write('{"message":"Cadastro de serviço efetuado com sucesso"}');
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

$app->put('/agendar/status/{id}', function($request, $response, $args){ 
   

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
    
    
    require_once('../control/recebeAgendaApi.php');
    if(atualizarAgendamentoAPI($dadosBodyJSON,$id)){
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



$app->run();

// http://localhost/Cuidador/Cuidador/api/agendar

?>