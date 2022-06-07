package com.example.petcaretcc;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.example.petcaretcc.model.Cliente;
import com.example.petcaretcc.remote.APIUtil;
import com.example.petcaretcc.remote.RouterInterface;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CadastroCliente extends AppCompatActivity {

    private EditText txtNome;
    private EditText txtEmail;
    private EditText txtDataNascimento;
    private EditText txtSenha;
    private EditText txtConfirmarSenha;
    private EditText txtCEP;
    private EditText txtTelefone;
    private EditText txtCPF;
    private RadioGroup txtSexo;
    private EditText txtNumero;
    private Button btnCadastrar;

    private TextView intentLogin;

    RouterInterface routerInterface;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cadastro_cliente);

        View decorView = getWindow().getDecorView();
        // Hide both the navigation bar and the status bar.
        // SYSTEM_UI_FLAG_FULLSCREEN is only available on Android 4.1 and higher, but as
        // a general rule, you should design your app to hide the status bar whenever you
        // hide the navigation bar.
        int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN;
        decorView.setSystemUiVisibility(uiOptions);


        //Resgate
        txtNome = findViewById(R.id.txtNome);
        txtEmail = findViewById(R.id.txtEmail);
        txtDataNascimento = findViewById(R.id.txtDataDeNascimento);
        txtSenha = findViewById(R.id.txtSenha);
        txtConfirmarSenha = findViewById(R.id.txtConfirmarSenha);
        //txtCEP = findViewById(R.id.txtCEP);
        txtTelefone = findViewById(R.id.txtTelefone);
        txtCPF = findViewById(R.id.txtCpf);
        txtSexo = findViewById(R.id.txtSexo);
        //txtNumero = findViewById(R.id.txtNumero);
        btnCadastrar = findViewById(R.id.btnCadastrar);

        routerInterface = APIUtil.getClientInterface();

        intentLogin = findViewById(R.id.txtEncaminhaCadastro);

        btnCadastrar.setOnClickListener(view -> {


//            if(!camposVazios()){
//                Toast.makeText(this, "Preencha todos os campos!", Toast.LENGTH_SHORT).show();
//            }
//            else{

                if(validacaoSenha()){

                    AlertDialog dialog = new AlertDialog.Builder(this)
                            .setTitle("CADASTRO COMO CLIENTE NA PLATAFORMA PETCARE")
                            .setMessage("O cadastro será concluído e você entrará em nossa base de dados! =)")
                            .setPositiveButton("CADASTRAR", (dialog1, which) -> {

                                Cliente cliente = new Cliente();

                              //  if()

                                cliente.setNome(txtNome.getText().toString());
                                cliente.setEmail(txtEmail.getText().toString());
                                cliente.setDataNascimento(txtDataNascimento.getText().toString());
                                cliente.setSenha(txtSenha.getText().toString());
                                cliente.setTelefone(txtTelefone.getText().toString());
//                                //cliente.setSexo();
                                cliente.setCpf(txtCPF.getText().toString());
                                cliente.setFoto("0");

//                                cliente.setNome("nome teste");
//                                cliente.setEmail("email teste");
//                                cliente.setDataNascimento("2022-04-12");
//                                cliente.setSenha("senha teste");
//                                cliente.setTelefone("123 telefone");
                                cliente.setSexo(2);
//                                cliente.setCpf("123 cpf");
//                                cliente.setFoto("foto teste");

                                addCliente(cliente);

                                //cliente2.setCep(txtCPF.getText().toString());
                                //cliente2.setNumero(43);


                            })
                            .setNegativeButton("CANCELAR", (dialog1, wich)->{})
                            .create();

                            dialog.show();

                }else{
                    Toast.makeText(this, "Senhas não correspondentes!", Toast.LENGTH_SHORT).show();
                }

//            }// Fim do camposVazios()

        });//Fim do setOnClickListener

        intentLogin.setOnClickListener(view->{
            Intent intent = new Intent(CadastroCliente.this, MainActivity.class);
            startActivity(intent);
        });//Fim do intentLogin



    }//Fim do OnCreate

    private boolean validacaoSenha(){

        String senha = txtSenha.getText().toString();
        String confirmarSenha = txtConfirmarSenha.getText().toString();

        return senha.equals(confirmarSenha);

    }//Fim da Validação de Senha

    private boolean camposVazios(){

        return(
        !txtNome.getText().toString().isEmpty() &&
        !txtEmail.getText().toString().isEmpty() &&
        !txtDataNascimento.getText().toString().isEmpty() &&
        !txtSenha.getText().toString().isEmpty() &&
        !txtConfirmarSenha.getText().toString().isEmpty() &&
        !txtCEP.getText().toString().isEmpty() &&
        !txtTelefone.getText().toString().isEmpty() &&
        !txtCPF.getText().toString().isEmpty() &&
        //!txtSexo.getText().toString().isEmpty() &&
        !txtNumero.getText().toString().isEmpty()
        );

    }//Fim da validacao de campos vazios

    public void addCliente(Cliente cliente){

        Log.d("API-ERRO", String.valueOf(cliente.getNome()));
        Log.d("API-ERRO", String.valueOf(cliente.getEmail()));
        Log.d("API-ERRO", String.valueOf(cliente.getDataNascimento()));
        Log.d("API-ERRO", String.valueOf(cliente.getSenha()));
        Log.d("API-ERRO", String.valueOf(cliente.getTelefone()));
        Log.d("API-ERRO", String.valueOf(cliente.getSexo()));
        Log.d("API-ERRO", String.valueOf(cliente.getCpf()));
        Log.d("API-ERRO", String.valueOf(cliente.getFoto()));

        Call<Cliente> call = routerInterface.addCliente(cliente);

        call.enqueue(new Callback<Cliente>() {
            @Override
            public void onResponse(Call<Cliente> call, Response<Cliente> response) {

                Log.d("API-ERRO", new String(String.valueOf(response.errorBody())));

                if(response.isSuccessful()){

                    Log.d("API- deu bom aaaaaa", String.valueOf(response.message()));
                    Toast.makeText(CadastroCliente.this,
                            "CLIENTE CADASTRADO",
                            Toast.LENGTH_LONG).show();

                }
                else{
                    Toast.makeText(CadastroCliente.this,
                            "ELSE ONRESPONSE",
                            Toast.LENGTH_LONG).show();

                    Log.d("API-ERRO else isSucessful", String.valueOf(response.errorBody()));

                }
            }

            @Override
            public void onFailure(Call<Cliente> call, Throwable t) {

                Log.d("API-ERRO ONFAILURE", t.getMessage());
                Toast.makeText(CadastroCliente.this,
                        "ONFAILURE - API",
                        Toast.LENGTH_LONG).show();

            }
        });

    }//Fim do consumo de API para cadastrar cliente2

}//Fim do Cadastro Cliente2