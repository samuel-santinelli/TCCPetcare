package com.example.petcaretcc;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.petcaretcc.model.Cep;
import com.example.petcaretcc.model.Cliente;
import com.example.petcaretcc.model.Cuidador;
import com.example.petcaretcc.remote.APIUtil;
import com.example.petcaretcc.remote.RouterInterface;
import com.example.petcaretcc.utils.Mascara;
import com.google.android.material.textfield.TextInputEditText;

import okhttp3.Route;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class CadastroCuidadorEndereco extends AppCompatActivity {

    /**---------------Teste de Via CEP-------------------**/
    private final String URL = "https://viacep.com.br/ws/";
    private Retrofit retrofitCEP;
    /**---------------Teste de Via CEP-------------------**/

    private String txtNome;
    private String txtEmail;
    private String txtSenha;
    private String txtDataNascimento;
    private String txtCpf;
    private String txtTelefone;

    private int cbPossuiCriancas = 4;
    private int cbPossuiAnimais = 4;
    private int cbPossuiCriancasInt = 0;
    private int cbPossuiAnimaisInt = 0;

    private int radioSexo;
    private String radioMoradia;
    private int radioSexoInt;

    private EditText txtNumero;
    private EditText txtCep;

    private EditText txtComplemento;
    private EditText txtLimitacoes;
    private EditText txtPreferencias;
    private EditText txtValorHora;
    private EditText txtBiografia;

    private Button btnCadastrar;
    private Button btnProcurarCEP;

    RouterInterface routerInterface;

    /**---------------Teste de Via CEP-------------------**/
    private TextView txtLogradouro,txtBairro, txtUF, txtLocalidade;
    private TextInputEditText txtCEP;
    /**---------------Teste de Via CEP-------------------**/


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cadastro_cuidador_endereco);

        View decorView = getWindow().getDecorView();
        int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN;
        decorView.setSystemUiVisibility(uiOptions);

        txtNumero = findViewById(R.id.txtNumero);
        txtCep = findViewById(R.id.txtCep);
        txtComplemento = findViewById(R.id.txtComplemento);
        txtLimitacoes = findViewById(R.id.txtLimitacoes);
        txtPreferencias = findViewById(R.id.txtPreferencias);
        txtValorHora = findViewById(R.id.txtValorHora);
        txtBiografia = findViewById(R.id.txtBiografia1);

        txtLogradouro = findViewById(R.id.txtLogradouro);
        txtBairro = findViewById(R.id.txtBairro);
        txtLocalidade = findViewById(R.id.txtCidade);
        txtCEP = findViewById(R.id.txtCep);

        btnProcurarCEP = findViewById(R.id.btnProcurarCEP);
        btnCadastrar = findViewById(R.id.btnCadastrarCuidador);

         txtNome = getIntent().getExtras().getString("txtNome");
         txtEmail = getIntent().getExtras().getString("txtEmail");
         txtDataNascimento = getIntent().getExtras().getString("txtDataNascimento");
         txtCpf = getIntent().getExtras().getString("txtCpf");
         txtTelefone = getIntent().getExtras().getString("txtTelefone");
         txtSenha = getIntent().getExtras().getString("txtSenha");
         cbPossuiCriancas = getIntent().getExtras().getInt("cbPossuiCriancas");
         cbPossuiAnimais = getIntent().getExtras().getInt("cbPossuiAnimais");
         radioSexo = getIntent().getExtras().getInt("radioSexo");
         radioMoradia = getIntent().getExtras().getString("radioMoradia");

         routerInterface = APIUtil.getClientInterface();

        /**Testes para identificar se os dados da outra tela estão vindo**/
        Log.d("testes-Nome", txtNome);
        Log.d("testes-Email", txtEmail);
        Log.d("testes-DataNasc", txtDataNascimento);
        Log.d("testes-Cpf", txtCpf);
        Log.d("testes-Telefone", txtTelefone);
        Log.d("testes-Senha", txtSenha);
        Log.d("testes-cbPossuiCriancas", String.valueOf(cbPossuiCriancas));
        Log.d("testes-cbPossuiAnimais", String.valueOf(cbPossuiAnimais));
        Log.d("testes-radioSexo", String.valueOf(radioSexo));

         /**Validações de envios especiais**/

         /**Possui animais & possui crianças**/
         if (cbPossuiAnimais == 1){
             cbPossuiAnimaisInt = 1;
         }
        if (cbPossuiCriancas == 1){
            cbPossuiCriancasInt = 1;
        }

        /**Sexo do cuidador**/
        if (radioSexo == 2){
            radioSexoInt = 1;
        }
        if (radioSexo == 1){
            radioSexoInt = 2;
        }
        if (radioSexo == 3){
            radioSexoInt = 3;
        }

        /**-------------------------------Teste de Via CEP-------------------------------**/
        txtCEP.addTextChangedListener(Mascara.insert(Mascara.MASCARA_CEP, txtCEP));

        //configura os recursos do retrofit
        retrofitCEP = new Retrofit.Builder()
                .baseUrl(URL)                                       //endereço do webservice
                .addConverterFactory(GsonConverterFactory.create()) //conversor
                .build();
        /**-------------------------------Teste de Via CEP-------------------------------**/

        btnCadastrar.setOnClickListener(view -> {

            Log.d("testes-complemento", String.valueOf(txtComplemento.getText()));
            Log.d("testes-numnero", String.valueOf(txtNumero.getText()));
            Log.d("testes-limitacoes", String.valueOf(txtLimitacoes.getText()));
            Log.d("testes-biografia", String.valueOf(txtBiografia.getText()));
            Log.d("testes-preferencias", String.valueOf(txtPreferencias.getText()));
            Log.d("testes-valor", String.valueOf(txtValorHora.getText()));
            Log.d("testes-moradia", String.valueOf(radioMoradia));
            Log.d("testes-animais", String.valueOf(cbPossuiAnimaisInt));
            Log.d("testes-criancas", String.valueOf(cbPossuiCriancasInt));
            Log.d("testes-sexo", String.valueOf(radioSexoInt));
            Log.d("testes-cep", String.valueOf(txtCep.getText()));

            /**Definindo quais dados serao enviados**/
            Cuidador cuidador = new Cuidador();

            cuidador.setNome(txtNome);
            cuidador.setEmail(txtEmail);
            cuidador.setDataNascimento(txtDataNascimento);
            cuidador.setCpf(txtCpf);
            //cuidador.setTelefone();
            cuidador.setSenha(txtSenha);

            cuidador.setPossuiCriancas(cbPossuiCriancasInt);
            cuidador.setPossuiAnimais(cbPossuiAnimaisInt);
            cuidador.setSexo(radioSexoInt);
            cuidador.setMoradia(radioMoradia);

            /**CEP**/
//            int cep = Integer.valueOf(txtCep.getText().toString());
            cuidador.setCep(06604235);

            /**Numero**/
            int numero = Integer.valueOf(txtNumero.getText().toString());
            cuidador.setNumero(numero);

//            cuidador.setBairro("Jardim Brotinho");
//            cuidador.setCidade("Jandira");
//            cuidador.setEndereco("Viela Terezinha Agostinho dos Santos");

            cuidador.setComplemento(txtComplemento.getText().toString());
            cuidador.setLimitacoes(txtLimitacoes.getText().toString());
            cuidador.setBiografia(txtBiografia.getText().toString());
            cuidador.setPreferencias(txtPreferencias.getText().toString());

            /**Valor Hora**/
            double valorHora = Double.valueOf(txtValorHora.getText().toString());
            cuidador.setValorHora(valorHora);

            addCuidador(cuidador);

        });

    }


    public void addCuidador(Cuidador cuidador){

        Call<Cuidador> call = routerInterface.addCuidador(cuidador);

        call.enqueue(new Callback<Cuidador>() {
            @Override
            public void onResponse(Call<Cuidador> call, Response<Cuidador> response) {
                Log.d("testes-apiOK", String.valueOf(response));


                Intent intent = new Intent(CadastroCuidadorEndereco.this,MainActivity.class);
                startActivity(intent);

            }

            @Override
            public void onFailure(Call<Cuidador> call, Throwable t) {
                Log.d("testes-apiRuim", String.valueOf(t));
            }
        });

    }//Fim do consumo de API para cadastrar cliente2

//    private Boolean validarCampos() {
//
//        Boolean status = true;
//        String cep = txtCEP.getText().toString().trim();
//
//        if (cep.isEmpty()) {
//            txtCEP.setError("Digite um CEP válido.");
//            status = false;
//        }
//
//        if ((cep.length() > 1) && (cep.length() < 10)) {
//            txtCEP.setError("O CEP deve possuir 8 dígitos");
//            status = false;
//        }
//        return status;
//    }

//    @Override
//    public void onClick(View v) {
//        switch (v.getId()) {
//            case R.id.btnProcurarCEP:
//                if (validarCampos()) {
//                    esconderTeclado();
//                    consultarCEP();
//                }
//                break;
//        }
//    }
//
//    private void esconderTeclado() {
//        InputMethodManager inputManager = (InputMethodManager)
//                getSystemService(Context.INPUT_METHOD_SERVICE);
//
//        inputManager.hideSoftInputFromWindow(getCurrentFocus().getWindowToken(),
//                InputMethodManager.HIDE_NOT_ALWAYS);
//    }
//
//    private void consultarCEP() {
//        String sCep = txtCEP.getText().toString().trim();
//
//        //removendo o ponto e o traço do padrão CEP
//        sCep = sCep.replaceAll("[.-]+", "");
//
//        //instanciando a interface
//        RouterInterface routerInterfaceCEP = retrofitCEP.create(RouterInterface.class);
//
//        //passando os dados para consulta
//        Call<Cep> call = routerInterfaceCEP.consultarCEP(sCep);
//
//        call.enqueue(new Callback<Cep>() {
//
//            @Override
//            public void onResponse(Call<Cep> call, Response<Cep> response) {
//
//                if (response.isSuccessful()) {
//
//                    Log.d("testes-apiRuim", String.valueOf(response));
//
//                    Cep cep = response.body();
//                    txtLogradouro.setText(cep.getLogradouro());
//                    txtComplemento.setText(cep.getComplemento());
//                    txtBairro.setText(cep.getBairro());
//                    txtLocalidade.setText(cep.getLocalidade());
//                    //Toast.makeText(getApplicationContext(), "CEP consultado com sucesso", Toast.LENGTH_LONG).show();
//
//                    //TODO desabilitar escrita nos campos com preenchimento automático
//                }
//            }
//
//            @Override
//            public void onFailure(Call<Cep> call, Throwable t) {
//                Log.d("testes-apiRuim", String.valueOf(t));
//            }
//        });
//    }

}