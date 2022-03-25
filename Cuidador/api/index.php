<?php
    
header('Access-Control-Allow-Origin: *'); 
 header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS'); 
 header('Access-Control-Allow-Header: Content-Type');
header('Content-Type: application/json');

     require_once("../config/config.php");

    $url = (string) null;

    
    $url = explode('/',$_GET['url']); 
        
    switch($url[0]){
        case 'cuidador':
                 require_once('cuidadorApi/index.php');
                 break;  
    
    }

    
    


?>