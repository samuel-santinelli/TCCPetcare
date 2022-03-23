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
            avaliacao,
            idSexoHost,
            sobrenome
           

           
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
             ".$arrayCuidador['avaliacao'].",
             ".$arrayCuidador['idSexoHost'].",
             '".$arrayCuidador['sobrenome']."'
            
          


         )
     ";

     $conexao = conexao();
            //  echo($sql);
             //die;

     if($teste = mysqli_query($conexao, $sql)){
        // echo('foi 1 / inserir.php');
         return true;
     }else{
        //  echo(' nao foi 1 / inserir.php - ');
            return false;
     }
 }


?>