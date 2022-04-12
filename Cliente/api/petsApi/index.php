<?php



require_once("vendor/autoload.php");

require_once('../control/recebePetsApi.php');
require_once("../control/exibirPetVacina.php");

$config = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$app = new \Slim\App($config);


$app->get('/pets', function($request, $response, $args){
    require_once("../control/exibirPets.php");
    if($listar = exibirPets() && $listarVacinas){
        if( $listarArray = criarArrayPet($listar)){  
            $listarDadosJSON = criarJsonPet($listarArray);
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
$app->post('/pets', function($request, $response, $args){ 

   
    $contentType = $request-> getHeaderLine('Content-Type'); 
   

    
    if($contentType == 'application/json'){
       
      
        $dadosBodyJSON = $request-> getParsedBody();
        // echo($dadosBodyJSON);
        // die;
       
        if($dadosBodyJSON == "" || $dadosBodyJSON == null) 
        {

            // var_dump($dadosBodyJSON);
            // die;
            return $response    ->withStatus(406)
                                ->withHeader('Content-Type', 'application/json')
                                 ->write('{"message":"Conteudo enviado pelo body não contem dados validos"}');
        }else
        {
            // var_dump($dadosBodyJSON);
            // die;
          

         
          
            if(inserirPetsAPI($dadosBodyJSON)){ 
                return $response    ->withStatus(201)
                                    ->withHeader('Content-Type', 'application/json')
                                    ->write('{"message":"Cadastro de pet criado com sucesso"}');
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


$app->get('/pets/vacinas', function($request, $response, $args){
    
    if($listar = exibirPetVacina()){
        if( $listarArray = criarArrayVacinas($listar)){  
            $listarDadosJSON = criarJsonVacinas($listarArray);
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

$app->post('/pets/vacinas', function($request, $response, $args){ 

    $contentType = $request-> getHeaderLine('Content-Type'); 
   

    
    if($contentType == 'application/json'){
       
      
        $dadosBodyJSON = $request-> getParsedBody();
        // echo($dadosBodyJSON);
        // die;
       
        if($dadosBodyJSON == "" || $dadosBodyJSON == null) 
        {

            // var_dump($dadosBodyJSON);
            // die;
            return $response    ->withStatus(406)
                                ->withHeader('Content-Type', 'application/json')
                                 ->write('{"message":"Conteudo enviado pelo body não contem dados validos"}');
        }else
        {
            // var_dump($dadosBodyJSON);
            // die;
          

         
            require_once('../control/recebeVacinasApi.php');
            if(inserirVacinasAPI($dadosBodyJSON)){ 
                return $response    ->withStatus(201)
                                    ->withHeader('Content-Type', 'application/json')
                                    ->write('{"message":"Cadastro de vacinas criado com sucesso"}');
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


$app->put('/pets/{id}', function($request, $response, $args){ 
   

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
    
    
    require_once('../control/recebePetsApi.php');
    if(atualizarPetAPI($dadosBodyJSON,$id)){
        return $response    ->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write('{"message":"Pet foi atualizado com sucesso"}');
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
$app->delete('/pets/{id}', function($request, $response, $args){ 
       
            
    if(!isset($args['id']) || !is_numeric($args['id']) )
    {
        return $response    ->withStatus(406)
                            ->withHeader('Content-Type', 'application/json')
                             ->write('{"message":"Não chegou o id."}');
    }else
    {
        $id = $args['id']; 

        require_once('../control/excluirPetApi.php');
        if(excluirPetApi($id)){ 
            return $response    ->withStatus(200)
                                ->withHeader('Content-Type', 'application/json')
                                ->write('{"message":"Pet excluido com sucesso"}');
        }else{
            return $response    ->withStatus(400)
                                ->withHeader('Content-Type', 'application/json')
                                ->write('{"message":"Não foi possível excluir os dados"}');
        }
      
    }



});

$app->run();

// http://localhost/Cuidador/Cliente/api/pets

?>