<?php
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');

     require_once("../config/config.php");

    $url = (string) null;

    
    $url = explode('/',$_GET['url']); 
        
    switch($url[0]){
        case 'cuidador':
                 require_once('cuidadorApi/index.php');
                 break;  
                 case 'agendar':
                    require_once('agendamentoApi/index.php');
                    break;       
                    case 'historico':
                        require_once('historicoHost/index.php');
                        break;         

    }

    
    


?>