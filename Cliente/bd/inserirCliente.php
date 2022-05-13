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

// echo($sql);
// // die;

// if($rs = mysqli_query($conexao,$sql)){
//     $idCliente =  mysqli_insert_id($conexao);
//     echo($idCliente);
//     // die;
//     return $idCliente;
//     // echo($idCliente);
//     // die;
//     return true;
   
// }else{
//     return false;
// }



// echo($sql);
// die;

    
   
    
if($resultado = mysqli_query($conexao, $sql)){
     return true;
    
    }else{
        return false;
    }

}
?>