<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');


   
require_once("../config/config.php");
   
$url = (string) null;
   
       
$url = explode('/',$_GET['url']); 

           
       switch($url[0]){
           case 'cliente':
                    require_once('clienteApi/index.php');
                    break;  
            case 'pets':
                    require_once('petsApi/index.php');
                    break; 
            case 'comportamento':
                    require_once('comportamentoApi/index.php');
                    break;   
            case 'vacinas':
                    require_once('vacinaApi/index.php');
                    break;   
        case 'raca':
                require_once('racaApi/index.php');
                break;  
                case 'servicoHost':
                        require_once('servicoApi/index.php');
                        break;  
}
   
    
    

?>