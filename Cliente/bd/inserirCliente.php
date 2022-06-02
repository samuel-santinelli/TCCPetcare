<?php


function inserirCliente($arrayCliente){
    
    require_once('../bd/conexao.php');
    $sql = "insert into tblClientes(
   
        nome,
        cpf,
        dataNascimento,
        foto,
        email,
        senha,
        idSexo,
        telefone,
        endereco,
        cep,
        cidade,
        bairro,
       complemento,
       numero
    )
    values(
       
       
        '".$arrayCliente['nome']."',
        '".$arrayCliente['cpf']."',
        '".$arrayCliente['dataNascimento']."',
        '".$arrayCliente['foto']."',
        '".$arrayCliente['email']."',
        '".$arrayCliente['senha']."',
        ".$arrayCliente['idSexo'].",
        '".$arrayCliente['telefone']."',
        '".$arrayCliente['endereco']."',
        '".$arrayCliente['cep']."',
        '".$arrayCliente['cidade']."',
        '".$arrayCliente['bairro']."',
        '".$arrayCliente['complemento']."',
        '".$arrayCliente['numero']."'
        


        )
        
        ";


$conexao = conexao();


// $rs = mysqli_query($conexao,$sql);
// $idCliente = (int) 0;
//         $idCliente =  mysqli_insert_id($conexao);
//          echo($idCliente);
//          $novoItem = array("id" => $idCliente); 
//         //  $arrayCliente = $rs + $novoItem;
//     //     // die;
//        return $idCliente;
//         return true;


if($rs = mysqli_query($conexao,$sql)){
    $idCliente =  mysqli_insert_id($conexao);
    // var_dump($idCliente, $sql);
    // die;
    $novoItem = array("id" => $idCliente); 
  $arrayDados = $arrayCliente + $novoItem;
// $arrayDados = array("id" => $idCliente,
//                   $arrayCliente  );
//   echo($sql);
// die;
//  var_dump($arrayDados);
//     die;
    return $arrayDados;
   
    // echo($idCliente);
    // die;
    // return true;
   
}else{
    return false;
}



// echo($sql);
// die;

    
   
    
// if($resultado = mysqli_query($conexao, $sql)){
//      return true;
    
//     }else{
//         return false;
//     }

}

// function inserirClienteAPI($arrayDados, $idCliente){

//     $novoItem = array("id" => $idCliente); 

   
//     $arrayCliente = $arrayDados + $novoItem;

   
       
//     if(inserirCliente($arrayCliente)){ 
//         var_dump($arrayCliente);
//         die;
//         return true;
//     }else{
//         return false;
//     }
// }


?>