<?php
 
 require_once('../bd/conexao.php');







 function inserir($arrayCuidador){
  
     $sql = "insert into tblHost(
             nome,
             dataNascimento,
             cpf,
             email,
             senha,
             foto,
             biografia,
             possuiAnimais,
            possuiCriancas,
             preferencias,
             moradia,
             limitacoes,
            idSexoHost,
            cep,
            cidade,
            bairro,
            complemento,
            numero,
            endereco,
            valorHora,
            telefone
           

           
         )
         values(
             '".$arrayCuidador['nome']."',
             '".$arrayCuidador['dataNascimento']."',
             '".$arrayCuidador['cpf']."',
             '".$arrayCuidador['email']."',
             '".$arrayCuidador['senha']."',
             '".$arrayCuidador['foto']."',
             '".$arrayCuidador['biografia']."',
             '".$arrayCuidador['possuiAnimais']."',
             '".$arrayCuidador['possuiCriancas']."',
             '".$arrayCuidador['preferencias']."',
             '".$arrayCuidador['moradia']."',
             '".$arrayCuidador['limitacoes']."',
             ".$arrayCuidador['idSexoHost'].",
             '".$arrayCuidador['cep']."',
             '".$arrayCuidador['cidade']."',
             '".$arrayCuidador['bairro']."',
             '".$arrayCuidador['complemento']."',
             '".$arrayCuidador['numero']."',
             '".$arrayCuidador['endereco']."',
             '".$arrayCuidador['valorHora']."',
             '".$arrayCuidador['telefone']."'
            
          


         )
     ";

     $conexao = conexao();
            //  echo($sql);
            //  die;

            if($rs = mysqli_query($conexao,$sql)){
                $idCuidador =  mysqli_insert_id($conexao);
                // var_dump($idCliente, $sql);
                // die;
                $novoItem = array("id" => $idCuidador); 
              $arrayDados = $arrayCuidador + $novoItem;
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
            
            
    //  if($teste = mysqli_query($conexao, $sql)){
    //     // echo('foi 1 / inserir.php');
    //      return true;
    //  }else{
    //     //  echo(' nao foi 1 / inserir.php - ');
    //         return false;
    //  }
 }


?>