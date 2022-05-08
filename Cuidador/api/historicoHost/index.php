<?php



require_once("vendor/autoload.php");
require_once("../control/exibirHistorico.php");
$config = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$app = new \Slim\App($config);

$app->get('/historico', function($request, $response, $args){
    
    if($listar = exibirHistorico()){
        if( $listarArray = criarArrayHistorico($listar)){  
            $listarDadosJSON = criarJSONHistorico($listarArray);
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

//http://localhost/Cuidador/Cuidador/api/historico

?>