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
            endereco
           

           
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
             '".$arrayCuidador['endereco']."'
            
          


         )
     ";

     $conexao = conexao();
            //  echo($sql);
            //  die;

     if($teste = mysqli_query($conexao, $sql)){
        // echo('foi 1 / inserir.php');
         return true;
     }else{
        //  echo(' nao foi 1 / inserir.php - ');
            return false;
     }
 }


?>