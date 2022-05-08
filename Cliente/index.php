<?php
    session_start();



?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>
<div id="cadastro"> 
            <div id="cadastroTitulo"> 
                <h1> Cadastro de Usuarios </h1>
            </div>
            <div id="cadastroInformacoes">
        
                <form action="autenticacao.php" name="frmCadastro" method="post" >
                   
                    <div class="campo">
                        <div class="informacoesPessoais">
                            <label> Login: </label>
                        </div>
                        <div class="entradaDeDados">
                            <input type="email" name="login" value="" placeholder="Digite seu Login" maxlength="100">
                        </div>
                    </div>
                    <div class="campo">
                        <div class="informacoesPessoais">
                            <label> Senha: </label>
                        </div>
                        <div class="entradaDeDados">
                            <input type="password" name="senha" value="" placeholder="Digite sua senha" maxlength="100">
                        </div>
                    </div>
                
                    
                    <div class="enviar">
                        <div class="enviar">
                            <input type="submit" name="btnEnviar" value="Autenticar">
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
</body>
</html>