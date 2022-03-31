<?php



require_once("vendor/autoload.php");

require_once('../control/recebeComportamentoApi.php');


$config = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$app = new \Slim\App($config);



$app->post('/comportamento', function($request, $response, $args){ 

   
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
          

         
          
            if(inserirComportamentoAPI($dadosBodyJSON)){ 
                return $response    ->withStatus(201)
                                    ->withHeader('Content-Type', 'application/json')
                                    ->write('{"message":"Cadastro de comportamento criado com sucesso"}');
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

$app->run();

// http://localhost/Cuidador/Cliente/api/comportamento

?>