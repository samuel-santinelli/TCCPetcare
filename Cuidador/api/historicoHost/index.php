<?php



require_once("vendor/autoload.php");
require_once("../control/exibirHistorico.php");
$config = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$app = new \Slim\App($config);
$app->get('/historico/{id}', function($request, $response, $args){ 
    $id = $args['id']; 
 

    require_once("../control/exibirHost.php");
    if($listDados = buscarCuidadoresId($id)){
     
            if( $listDadosArray = criarArrayHistorico($listDados)){ 
                     $listDadosJSON = criarJSONHistorico($listDadosArray);
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