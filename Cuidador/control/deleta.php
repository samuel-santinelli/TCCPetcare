 <?php

require_once("../config/config.php");
require_once(SRC. "bd/excluir.php");

$id = $_GET['id'];

$nomeFoto = $_GET['foto']; 

if(excluir($id)){
    unlink(SRC.NOME_DIRETORIO_FILE.$nomeFoto); 
    echo ("
    <script>
        alert('Foi');
        window.location.href = '../index.php';
    </script>
    " );
// echo("foi");
}

else{
    // echo("nao foi");
    echo ("
            <script>
              alert('Não foi');
             window.history.back();
             </script>
        ");
}

?> 