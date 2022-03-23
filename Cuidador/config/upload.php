<?php

    
  
    function uploadFile($arrayFile)
    {
        $fotoFile = $arrayFile; 

        $tamanhoOriginal = (int) 0; 
        $tamanhoKB = (int) 0; 
        $extensao = (string) null; 
        $tipoArquivo = (string) null; 
        $nomeArquivo = (string) null; 
        $nomeArquivoCript =(string) null; 
        $foto = (string) null;
        $arquivoTemp=(string) null;
        // var_dump($arrayFile); 
        // die; //2 passo

        // 5 passo valida se o arquivo existe no array, fazendo a conversao
        if ( $fotoFile['size'] > 0 && $fotoFile['type'] != "" )
        {
            //7 passo recebe o tamanho original do arquivo em byte
            $tamanhoOriginal = $fotoFile['size'];

            // 8 passo converte o tamanho original em KBytes
            $tamanhoKB = $tamanhoOriginal/1024;

            //10 passo recebe o tipo original do arquivo, ou seja, (jpg,png) etc...
           $tipoArquivo =  $fotoFile['type'];     

            // 12 passo - valida se o tamanho do arquivo é menor do que o permitido(do que o configurado)
           if($tamanhoKB <= TAMANHO_FILE )
           {
                if( in_array($tipoArquivo, EXTENSOES_PERMITIDAS )) 
                {
                    $nomeArquivo = pathinfo($fotoFile['name'], PATHINFO_FILENAME);
                    $extensao = pathinfo($fotoFile['name'], PATHINFO_EXTENSION); 
                
                    // echo( $extensao );
                    // die;

                    $nomeArquivoCript = md5( $nomeArquivo.uniqid(time()));
                    // echo($nomeArquivoCript);
                    // die;
                    $foto = $nomeArquivoCript.".".$extensao;
                    
                   
                    $arquivoTemp = $fotoFile['tmp_name'];
                    // echo( SRC.NOME_DIRETORIO_FILE.$foto); // teste
                    // die;


                   
                   if(move_uploaded_file($arquivoTemp, SRC.NOME_DIRETORIO_FILE.$foto)){
                        return $foto;
                   } else{
                       echo('Erro no upload do arquivo');
                   }
                }else{
                    echo('Erro de tipo de arquivo'); 
                }
           }else{
               echo('Erro tamanho do arquivo');
           }
        }

    }



?>