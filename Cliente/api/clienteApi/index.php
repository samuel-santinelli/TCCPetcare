<?php



require_once("vendor/autoload.php");

require_once('../control/recebeClientesApi.php');
require_once("../control/exibirClientes.php");
require_once("../control/exibirSexo.php");
require_once("../control/exibirLogin.php");

$config = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];

$app = new \Slim\App($config);

$app->get('/cliente/login', function($request, $response, $args){ 
 
    if(isset( $request ->getQueryParams()['email'])) //vendo se existe esse parametro nome, se teve a existencia da chegada de dados, parametro para filtrar pelo nome
    {

    /************** Recebendo dados pela query string */
        $login = (string) null;
        $senha = (string) null;
        $login = $request ->getQueryParams()['email']; 
        $senha = $request ->getQueryParams()['senha']; 
        if($listDados = buscarLoginSenha($login, $senha)){

                if( $listDadosArray = criarArrayCliente($listDados)){  
                         $listDadosJSON = criarJSONCLIENTE($listDadosArray);
                }
        }
 
    }else{
   
  
        if($listDados =  exibirClientes()){
       
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



$app->get('/cliente/listarSexo', function($request, $response, $args){
 
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

$app->get('/cliente/{id}', function($request, $response, $args){ 
    $id = $args['id']; 
 
    require_once("../control/exibirClientes.php");
  
    if($listDados = buscarClientes($id)){
     
            if( $listDadosArray = criarArrayCliente($listDados)){ 
                     $listDadosJSON = criarJSONCLIENTE($listDadosArray);
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


$app->get('/cliente', function($request, $response, $args){

    if($listar = exibirClientes()){
        if( $listarArray = criarArrayCliente($listar)){  
            $listarDadosJSON = criarJSONCLIENTE($listarArray);
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





$app->post('/cliente', function($request, $response, $args){ 

   
    $contentType = $request-> getHeaderLine('Content-Type'); 
   

    
    if($contentType == 'application/json'){
       
      
        $dadosBodyJSON = $request-> getParsedBody();
        // var_dump($dadosBodyJSON);
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
        
             $idCliente = (int) 0;
            //  $idCliente = $args['idCliente'];
            //  var_dump($dadosBodyJSON);
            //  die;

             require_once('../bd/inserirCliente.php');
          
            if($resposta = inserirClienteAPI($dadosBodyJSON, $idCliente)){ 
                // var_dump($dadosBodyJSON);
                // die;
                return $response    ->withStatus(201)
                                    ->withHeader('Content-Type', 'application/json')
                                    ->write('{"message":"Item criado com sucesso", "'.$resposta.'"}');
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


// // $app->post('/cliente', function($request, $response, $args){ 

   
// //     $contentType = $request-> getHeaderLine('Content-Type'); 
   

    
// //     if($contentType == 'application/json'){
       
      
// //         $dadosBodyJSON = $request-> getParsedBody();
// //         // echo($dadosBodyJSON);
// //         // die;
       
// //         if($dadosBodyJSON == "" || $dadosBodyJSON == null) 
// //         {

// //             var_dump($dadosBodyJSON);
// //             die;
// //             return $response    ->withStatus(406)
// //                                 ->withHeader('Content-Type', 'application/json')
// //                                  ->write('{"message":"Conteudo enviado pelo body não contem dados validos"}');
// //         }else
// //         {
// //             // var_dump($dadosBodyJSON);
// //             // die;
          

         
          
// //             if(inserirClienteAPI($dadosBodyJSON)){ 
// //                 // var_dump($dadosBodyJSON);
// //                 // die;
// //                 return $response    ->withStatus(201)
// //                                     ->withHeader('Content-Type', 'application/json')
// //                                     ->write('{"message":"Item criado com sucesso"}');
// //             }else{
// //                 return $response    ->withStatus(400)
// //                                     ->withHeader('Content-Type', 'application/json')
// //                                     ->write('{"message":"Não foi possível salvar os dados, por favor conferir o body da mensagem"}');
// //             }
          
// //         }

    
// //     }else
// //     {
// //         return $response    ->withStatus(406)
// //                             ->withHeader('Content-Type', 'application/json')
// //                             ->write('{"message":"Formato de dados do header incompatível com o padrão json"}');
// //     }
  
// // });





$app->put('/cliente/{id}', function($request, $response, $args){ 
   

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
    
    
    require_once('../control/recebeClientesApi.php');
    if(atualizarClienteAPI($dadosBodyJSON,$id)){
        return $response    ->withStatus(200)
        ->withHeader('Content-Type', 'application/json')
        ->write('{"message":"Cliente foi atualizado com sucesso"}');
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

$app->delete('/cliente/{id}', function($request, $response, $args){ 
       
            
    if(!isset($args['id']) || !is_numeric($args['id']) )
    {
        return $response    ->withStatus(406)
                            ->withHeader('Content-Type', 'application/json')
                             ->write('{"message":"Não chegou o id."}');
    }else
    {
        $id = $args['id']; 

        require_once('../control/excluirClienteApi.php');
        if(excluirClienteApi($id)){ 
            return $response    ->withStatus(200)
                                ->withHeader('Content-Type', 'application/json')
                                ->write('{"message":"Cliente excluido com sucesso"}');
        }else{
            return $response    ->withStatus(400)
                                ->withHeader('Content-Type', 'application/json')
                                ->write('{"message":"Não foi possível excluir os dados"}');
        }
      
    }



});

// $app->put('/cliente/recuperarsenha', function($request, $response, $args){

   
    

//     $contentType = $request-> getHeaderLine('Content-Type'); 
    
    
    
//     if($contentType == 'application/json'){ 
    
//     $dadosBodyJSON = $request-> getParsedBody();

    
    
//     if( $dadosBodyJSON == "" || $dadosBodyJSON == null || !isset($dadosBodyJSON['email']) ) 
//     {
//         return $response    ->withStatus(406)
//         ->withHeader('Content-Type', 'application/json')
//         ->write('{"message":"Conteudo enviado pelo body não contem dados validos....."}');
//     }else
//     {
    
//     $email = $dadosBodyJSON['email']; 
    
//     echo($email);
//     die;
//     require_once('../control/recebeClientesApi.php');
//     if(atualizarSenhaAPI($dadosBodyJSON,$email)){
//         return $response    ->withStatus(200)
//         ->withHeader('Content-Type', 'application/json')
//         ->write('{"message":"Cliente foi atualizado com sucesso"}');
//     }
//     else{
//         return $response    ->withStatus(400)
//         ->withHeader('Content-Type', 'application/json')
//         ->write('{"message":"Não foi possível salvar os dados, por favor conferir o body da mensagem"}');
//     }
    
//     }
    
    
//     }
//     else{
//         return $response    ->withStatus(406)
//         ->withHeader('Content-Type', 'application/json')
//         ->write('{"message":"Formato de dados do header incompatível com o padrão json"}');
//     }
    
//     });

$app->run();

// http://localhost/Cuidador/Cliente/api/cliente
//http://localhost/Cuidador/Cliente/api/cliente/login?email=teste@teste&senha=123

?>