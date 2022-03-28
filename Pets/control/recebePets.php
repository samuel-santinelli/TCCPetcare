<?php

require_once('../config/config.php');
require_once(SRC.'bd/inserirPets.php');

$nome = (string)null;
$deficiencia = (string) null;
$descricao = (string) null;
$castrado = (string) null;
$foto = (string) '';
$dataNascimento = (string) null;
$avaliacao = (int) 0;
$idRaca = (int) 0;
$idEspecie = (int) 0;
$idFase = (int) 0;
$idCliente = (int) 0;

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $nome = $_POST['nome'];
    $deficiencia = $_POST['deficiencia'];
    $descricao = $_POST['descricao'];
    $castrado = $_POST['castrado'];
    $foto = $_POST['fleFoto'];
    $dataNascimento = $_POST['dataNascimento'];
    $avaliacao = $_POST['avaliacao'];
    $idRaca = $_POST['idRaca'];
    $idEspecie = $_POST['ídEspecie'];
    $idFase = $_POST['ídFase'];
    $idCliente = $_POST['idCliente'];


    if($nome == ''){
        echo('Caixa vaiza');
    }else{
        $pets = array(
            $nome => "nome",
            $deficiencia => "deficiencia",
            $descricao = "descricao",
            $castrado => "castrado",
            $foto => "foto",
            $dataNascimento => "dataNascimento",
            $avaliacao => "avaliacao",
            $idRaca => "idRaca",
            $idEspecie => "idEspecie",
            $idFase => "idFase",
            $idCliente => "idCliente"
        );
         

            if(inserirPet($pets)){
                echo("Foi o inserir - recebe");
            }else{
                echo("Nao foi - recebe");
            }

        
    }


}
?>