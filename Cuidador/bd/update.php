<?php

require_once('../bd/conexao.php');

function edita($arrayCuidador)
{
    $sql = "update tblHost set 
            nome = '".$arrayCuidador['nome']."',
           dataNascimento =  '".$arrayCuidador['dataNascimento']."',
           cpf =  '".$arrayCuidador['cpf']."',
            email = '".$arrayCuidador['email']."',
            senha = '".$arrayCuidador['senha']."',
            foto = '".$arrayCuidador['foto']."',
            biografia = '".$arrayCuidador['biografia']."',
            possuiAnimais = '".$arrayCuidador['possuiAnimais']."',
            possuiCriancas = '".$arrayCuidador['possuiCriancas']."',
            preferencias = '".$arrayCuidador['preferencias']."',
            moradia = '".$arrayCuidador['moradia']."',
            limitacoes = '".$arrayCuidador['limitacoes']."',
            idSexoHost = ".$arrayCuidador['idSexoHost'].",
            cep = '".$arrayCuidador['cep']."',
            endereco = '".$arrayCuidador['endereco']."',
            bairro = '".$arrayCuidador['bairro']."',
            cidade = '".$arrayCuidador['cidade']."',
            complemento = '".$arrayCuidador['complemento']."',
            numero = '".$arrayCuidador['numero']."',
            valorHora = '".$arrayCuidador['valorHora']."'
    
        where idHost= ".$arrayCuidador['id'];
        $conexao = conexao();
       
//echo($sql);
    //die;

        if(mysqli_query($conexao,$sql)){
             return true;
            // echo('foi a edicao');
        }else{
             return false;
            // echo('nao foi a edicao');
        }
    

}



?>