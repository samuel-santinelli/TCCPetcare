package com.example.petcaretcc;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.Button;
import android.widget.EditText;
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
    private EditText txtSexo;
    private EditText txtNumero;
    private Button btnCadastrar;

    private TextView intentLogin;

    RouterInterface routerInterface;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cadastro_cliente);

        //Resgate
        txtNome = findViewById(R.id.txtNome);
        txtEmail = findViewById(R.id.txtEmail);
        txtDataNascimento = findViewById(R.id.txtDataDeNascimento);
        txtSenha = findViewById(R.id.txtSenha);
        txtConfirmarSenha = findViewById(R.id.txtConfirmarSenha);
        txtCEP = findViewById(R.id.txtCEP);
        txtTelefone = findViewById(R.id.txtTelefone);
        txtCPF = findViewById(R.id.txtCpf);
        txtSexo = findViewById(R.id.txtSexo);
        txtNumero = findViewById(R.id.txtNumero);
        btnCadastrar = findViewById(R.id.btnCadastrar);

        routerInterface = APIUtil.getClientInterface();

        intentLogin = findViewById(R.id.txtEncaminhaCadastro);

        btnCadastrar.setOnClickListener(view -> {


            if(!camposVazios()){
                Toast.makeText(this, "Preencha todos os campos!", Toast.LENGTH_SHORT).show();
            }
            else{

                if(validacaoSenha()){

                    AlertDialog dialog = new AlertDialog.Builder(this)
                            .setTitle("CADASTRO COMO CLIENTE NA PLATAFORMA PETCARE")
                            .setMessage("O cadastro será concluído e você entrará em nossa base de dados! =)")
                            .setPositiveButton("CADASTRAR", (dialog1, which) -> {

                                Cliente cliente = new Cliente();

//                                cliente2.setNome(txtNome.getText().toString());
//                                cliente2.setEmail(txtEmail.getText().toString());
//                                cliente2.setDataNascimento(txtDataNascimento.getText().toString());
//                                cliente2.setSenha(txtSenha.getText().toString());
//                                cliente2.setTelefone(txtTelefone.getText().toString());
//                                cliente2.setSexo(Integer.parseInt(txtSexo.getText().toString()));
//                                cliente2.setCpf(txtCPF.getText().toString());
//                                cliente2.setFoto("0");

                                cliente.setNome("nome teste");
                                cliente.setEmail("email teste");
                                cliente.setDataNascimento("2022-04-12");
                                cliente.setSenha("senha teste");
                                cliente.setTelefone("123 telefone");
                                cliente.setSexo(1);
                                cliente.setCpf("123 cpf");
                                cliente.setFoto("foto teste");

                                addCliente(cliente);

                                //cliente2.setCep(txtCPF.getText().toString());
                                //cliente2.setNumero(43);

                                //addCliente(cliente2);

                            })
                            .setNegativeButton("CANCELAR", (dialog1, wich)->{})
                            .create();

                            dialog.show();

                }else{
                    Toast.makeText(this, "Senhas não correspondentes!", Toast.LENGTH_SHORT).show();
                }

            }// Fim do camposVazios()

        });//Fim do setOnClickListener

        intentLogin.setOnClickListener(view->{
            Intent intent = new Intent(CadastroCliente.this, MainActivity.class);
            startActivity(intent);
        });//Fim do intentLogin



    }//Fim do OnCreate

    private boolean validacaoSenha(){

        String senha = txtSenha.getText().toString();
        String ConfirmarSenha = txtConfirmarSenha.getText().toString();

        return senha.equals(ConfirmarSenha);

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
        !txtSexo.getText().toString().isEmpty() &&
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

                if(response.isSuccessful()){

                    Toast.makeText(CadastroCliente.this,
                            "CLIENTE CADASTRADO",
                            Toast.LENGTH_LONG).show();

                }
            }

            @Override
            public void onFailure(Call<Cliente> call, Throwable t) {

                Log.d("API-ERRO ONFAILURE", t.getMessage());
                Toast.makeText(CadastroCliente.this,
                        "ON FAILURE",
                        Toast.LENGTH_LONG).show();

            }
        });

    }//Fim do consumo de API para cadastrar cliente2

}//Fim do Cadastro Cliente2