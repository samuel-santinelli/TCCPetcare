<?php
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

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