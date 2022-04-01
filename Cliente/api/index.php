<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Origin");
header('content-Type: application/json');

   
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
}
   
    
    

?>