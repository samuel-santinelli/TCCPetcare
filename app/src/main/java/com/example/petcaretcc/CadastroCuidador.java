package com.example.petcaretcc;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.example.petcaretcc.model.Cuidador;
import com.example.petcaretcc.remote.APIUtil;
import com.example.petcaretcc.remote.RouterInterface;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CadastroCuidador extends AppCompatActivity {

    private EditText txtNome;
    private EditText txtEmail;
    private EditText txtDataNascimento;
    private EditText txtSenha;
    private EditText txtConfirmarSenha;
    private EditText txtCEP;
    private EditText txtTelefone;
    private EditText txtCPF;
    private EditText txtNumero;
    private Button btnCadastrar;



    private TextView intentLogin;

    RouterInterface routerInterface;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cadastro_cuidador);

        //Resgate
        //btnCadastrar = findViewById(R.id.btnCadastrar)



        routerInterface = APIUtil.getClientInterface();

        intentLogin = findViewById(R.id.txtEncaminhaCadastro);

        btnCadastrar.setOnClickListener(view -> {


            if(!camposVazios()){
                Toast.makeText(this, "Preencha todos os campos!", Toast.LENGTH_SHORT).show();
            }
            else{

                if(validacaoSenha()){

                    AlertDialog dialog = new AlertDialog.Builder(this)
                            .setTitle("CADASTRO COMO Cuidador NA PLATAFORMA PETCARE")
                            .setMessage("O cadastro será concluído e você entrará em nossa base de dados! =)")
                            .setPositiveButton("CADASTRAR", (dialog1, which) -> {

                                Cuidador cuidador = new Cuidador();

//                                Cuidador2.setNome(txtNome.getText().toString());
//                                Cuidador2.setEmail(txtEmail.getText().toString());
//                                Cuidador2.setDataNascimento(txtDataNascimento.getText().toString());
//                                Cuidador2.setSenha(txtSenha.getText().toString());
//                                Cuidador2.setTelefone(txtTelefone.getText().toString());
//                                Cuidador2.setSexo(Integer.parseInt(txtSexo.getText().toString()));
//                                Cuidador2.setCpf(txtCPF.getText().toString());
//                                Cuidador2.setFoto("0");

                                cuidador.setNome("nome teste");
                                cuidador.setEmail("email teste");
                                cuidador.setDataNascimento("2022-04-12");
                                cuidador.setSenha("senha teste");
                                cuidador.setTelefone("123 telefone");
                                //cuidador.setSexo();
                                cuidador.setCpf("123 cpf");
                                //cuidador.setSexo();
                                //cuidador.setMoradia();
                                cuidador.setCep("foto teste");
                                cuidador.setNumero("foto teste");
                                //cuidador.setPossuiAnimais();
                                //cuidador.setPossuiCriancas();
                                cuidador.setLimitacoes("foto teste");
                                cuidador.setPreferencias("wfe");
                                cuidador.setFoto("wfe");

                                addCuidador(cuidador);

                                //Cuidador2.setCep(txtCPF.getText().toString());
                                //Cuidador2.setNumero(43);

                                //addCuidador(Cuidador2);

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
            Intent intent = new Intent(CadastroCuidador.this, MainActivity.class);
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
                        //!txtSexo.getText().toString().isEmpty() &&
                        !txtNumero.getText().toString().isEmpty()
        );

    }//Fim da validacao de campos vazios

    public void addCuidador(Cuidador cuidador){

        Log.d("API-ERRO", String.valueOf(cuidador.getNome()));
        Log.d("API-ERRO", String.valueOf(cuidador.getEmail()));
        Log.d("API-ERRO", String.valueOf(cuidador.getDataNascimento()));
        Log.d("API-ERRO", String.valueOf(cuidador.getSenha()));
        Log.d("API-ERRO", String.valueOf(cuidador.getTelefone()));
        Log.d("API-ERRO", String.valueOf(cuidador.getSexo()));
        Log.d("API-ERRO", String.valueOf(cuidador.getCpf()));
        Log.d("API-ERRO", String.valueOf(cuidador.getFoto()));

        Call<Cuidador> call = routerInterface.addCuidador(cuidador);

        call.enqueue(new Callback<Cuidador>() {
            @Override
            public void onResponse(Call<Cuidador> call, Response<Cuidador> response) {

                if(response.isSuccessful()){

                    Toast.makeText(CadastroCuidador.this,
                            "Cuidador CADASTRADO",
                            Toast.LENGTH_LONG).show();

                }
            }

            @Override
            public void onFailure(Call<Cuidador> call, Throwable t) {

                Log.d("API-ERRO ONFAILURE", t.getMessage());
                Toast.makeText(CadastroCuidador.this,
                        "ON FAILURE",
                        Toast.LENGTH_LONG).show();

            }
        });

    }//Fim do consumo de API para cadastrar Cuidador2

}