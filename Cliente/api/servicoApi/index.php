<?php



require_once("vendor/autoload.php");
require_once("../control/exibirServico.php");
// require_once("../config/config.php");


$config = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$app = new \Slim\App($config);




$app->get('/servicoHost/{id}', function($request, $response, $args){ 
    $id = $args['id']; 
 
    require_once("../control/exibirClientes.php");
  
    if($listDados = buscaClienteId($id)){
     
            if( $listDadosArray = criarArraySERVICO($listDados)){ 
                     $listDadosJSON = criarJSONSERVICO($listDadosArray);
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