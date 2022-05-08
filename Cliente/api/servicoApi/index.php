<?php



require_once("vendor/autoload.php");
require_once("../control/exibirServico.php");
$config = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$app = new \Slim\App($config);

$app->get('/servicoHost', function($request, $response, $args){
    
    if($listar = exibirServico()){
        if( $listarArray = criarArraySERVICO($listar)){  
            $listarDadosJSON = criarJSONSERVICO($listarArray);
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

$app->run();

//http://localhost/Cuidador/Cliente/api/servicoHost

?>