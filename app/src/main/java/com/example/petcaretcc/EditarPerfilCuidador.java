package com.example.petcaretcc;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RadioGroup;
import android.widget.TextView;

import com.example.petcaretcc.model.Cuidador;
import com.example.petcaretcc.remote.APIUtil;
import com.example.petcaretcc.remote.RouterInterface;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class EditarPerfilCuidador extends AppCompatActivity {

    ImageView ivSair;

    private Button btnAlterarSenha;
    private Button btnSalvar;
    private Button btncExcluirMinhaConta;

    private RadioGroup radioMoradia, radioSexo;

    private RouterInterface routerInterface;

    private EditText txtNome, txtCpf, txtCep, txtEmail, txtLimitacoes, txtPreferencias, txtbiografia, txtValorTotal, txtDataNascimento, txtComplemento, txtNumero, txtTelefone;
    TextView ivEndereco, ivBairro, ivCidade, nomeTitulo;

    int cbPossuiAnimaisInt = 0, cbPossuiCriancasInt = 0;

    CheckBox cbPossuiAnimais, cbPossuiCriancas;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_editar_perfil_cuidador);

        ivSair = findViewById(R.id.ivSair);

        View decorView = getWindow().getDecorView();
        // Hide both the navigation bar and the status bar.
        // SYSTEM_UI_FLAG_FULLSCREEN is only available on Android 4.1 and higher, but as
        // a general rule, you should design your app to hide the status bar whenever you
        // hide the navigation bar.
        int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN;
        decorView.setSystemUiVisibility(uiOptions);

        int idCuidador = getIntent().getExtras().getInt("idCuidador");
        Log.d("API-idCuidador", String.valueOf(idCuidador));

        ivSair.setOnClickListener(view->{
            Intent intent = new Intent(this, PerfilCuidadorBio.class);
            intent.putExtra("idCuidador", idCuidador);
            startActivity(intent);
        });

        btnAlterarSenha = findViewById(R.id.btnAlterarSenha);
        btnSalvar = findViewById(R.id.btnSalvar);
        btncExcluirMinhaConta = findViewById(R.id.btnExcluirMinhaConta);

        nomeTitulo = findViewById(R.id.nomeTitulo);

        txtNome = findViewById(R.id.txtEditarNome);
        txtCpf = findViewById(R.id.txtEditarCpf);
        txtCep = findViewById(R.id.txtEditarCep);
        txtEmail = findViewById(R.id.txtEditarEmail);
        txtLimitacoes = findViewById(R.id.txtEditarLimitacoes);
        txtPreferencias = findViewById(R.id.txtEditarPreferencias);
        txtbiografia = findViewById(R.id.txtEditarBiografia);
        txtValorTotal = findViewById(R.id.txtEditarValorHora);
        txtDataNascimento = findViewById(R.id.txtEditarDataNascimento);
        txtComplemento= findViewById(R.id.txtEditarComplemento);
        txtNumero = findViewById(R.id.txtEditarNumero);
        txtTelefone = findViewById(R.id.txtEditarTelefone);
        ivEndereco = findViewById(R.id.txtEditarEndereco);
        ivBairro = findViewById(R.id.txtEditarBairro);
        ivCidade= findViewById(R.id.txtEditarCidade);

        radioSexo = findViewById(R.id.txtEditarSexo);
        radioMoradia = findViewById(R.id.txtEditarMoradia);

        routerInterface = APIUtil.getClientInterface();
        Call<List<Cuidador>> call = routerInterface.perfilCuidador(idCuidador);
        call.enqueue(new Callback<List<Cuidador>>() {
            @Override
            public void onResponse(Call<List<Cuidador>> call, Response<List<Cuidador>> response) {

                String nome = response.body().get(0).getNome();
                String cpf = response.body().get(0).getCpf();
                int cep = response.body().get(0).getCep();
                String email = response.body().get(0).getEmail();
                String limitacoes = response.body().get(0).getLimitacoes();
                String preferencias = response.body().get(0).getPreferencias();
                String biografia = response.body().get(0).getBiografia();
                Double valorTotal = response.body().get(0).getValorHora();
                String dataNascimento = response.body().get(0).getDataNascimento();
                String complemento = response.body().get(0).getComplemento();
                int numero = response.body().get(0).getNumero();
                String bairro = response.body().get(0).getBairro();
                String endereco = response.body().get(0).getEndereco();
                String cidade = response.body().get(0).getCidade();
                String nomeTituloV = response.body().get(0).getNome();

                nomeTitulo.setText(nomeTituloV);

                txtNome.setText(nome);
                txtCpf.setText(cpf);
                //txtCep.setText(cep);
                Log.d("API-", String.valueOf(cep));
                txtEmail.setText(email);
                txtLimitacoes.setText(limitacoes);
                txtPreferencias.setText(preferencias);
                txtbiografia.setText(biografia);
                txtValorTotal.setText(String.valueOf(valorTotal));
                txtDataNascimento.setText(dataNascimento);
                txtComplemento.setText(complemento);
                txtNumero.setText(String.valueOf(numero));
                ivBairro.setText(bairro);
                ivEndereco.setText(endereco);
                ivCidade.setText(cidade);



            }

            @Override
            public void onFailure(Call<List<Cuidador>> call, Throwable t) {
                Log.d("API-", String.valueOf(t));
            }
        });

        btnSalvar.setOnClickListener(view -> {

            double valorTotal = Double.valueOf(String.valueOf(txtValorTotal.getText()));

            Cuidador cuidador = new Cuidador();

            /**Colocar dentro do botão**/
//            cbPossuiAnimais = findViewById(R.id.txtEditarPossuiAnimais);
//            if (cbPossuiAnimais.isChecked()) {
//                 cbPossuiAnimaisInt = 1;
//            }
//
//            cbPossuiCriancas = findViewById(R.id.txtEditarPossuiCriancas);
//            if (cbPossuiCriancas.isChecked()) {
//                 cbPossuiCriancasInt = 1;
//            }
//
//            int radioSexoInt = radioSexo.getCheckedRadioButtonId();
//            int radioMoradiaInt = radioMoradia.getCheckedRadioButtonId();
//
//            if (radioMoradiaInt == 1){
//                cuidador.setMoradia("Casa");
//            }
//            if (radioMoradiaInt == 2){
//                cuidador.setMoradia("Apartamento");
//            }
//
//            if (radioSexoInt == 1){
//                /**Masculino**/
//                cuidador.setSexo(1);
//            }
//
//            if (radioSexoInt == 2){
//                /**Feminino**/
//                cuidador.setSexo(2);
//            }
//
//            if (radioSexoInt == 3){
//                /**Não binário**/
//                cuidador.setSexo(3);
//            }

//            cuidador.setNome(txtNome.getText().toString());
//            cuidador.setEmail(txtNome.getText().toString());
//            cuidador.setTelefone(txtTelefone.getText().toString());
//            cuidador.setCpf(txtCpf.getText().toString());
//            cuidador.setDataNascimento(txtDataNascimento.getText().toString());
//            cuidador.setBiografia(txtbiografia.getText().toString());
//            cuidador.setPreferencias(txtPreferencias.getText().toString());
//            cuidador.setLimitacoes(txtLimitacoes.getText().toString());
//            cuidador.setPossuiCriancas(cbPossuiCriancasInt);
//            cuidador.setPossuiAnimais(cbPossuiAnimaisInt);
//            cuidador.setEndereco(ivEndereco.getText().toString());
//            cuidador.setBairro(ivBairro.getText().toString());
//            cuidador.setCidade(ivCidade.getText().toString());
//            cuidador.setComplemento(txtComplemento.getText().toString());
//            cuidador.setCep(txtCep.getText().toString());
//            cuidador.setNumero(Integer.valueOf(String.valueOf(txtNumero)));
//            //cuidador.setValorHora(Double.valueOf(valorTotal));
//            cuidador.setValorHora(30);
//            cuidador.setFoto("");

//            cuidador.setNome("1");
//            cuidador.setEmail("1");
//            cuidador.setTelefone("1");
//            cuidador.setCpf("1");
//            cuidador.setDataNascimento("2004-12-12");
//            cuidador.setBiografia("1");
//            cuidador.setPreferencias("1");
//            cuidador.setLimitacoes("1");
//            cuidador.setPossuiCriancas(1);
//            cuidador.setPossuiAnimais(1);
//            cuidador.setEndereco("1");
//            cuidador.setBairro("1");
//            cuidador.setCidade("1");
//            cuidador.setComplemento("1");
//            cuidador.setCep("1");
//            cuidador.setNumero(5);
//            //cuidador.setValorHora(Double.valueOf(valorTotal));
//            cuidador.setValorHora(30);
//            cuidador.setFoto("");
//            cuidador.setSexo(1);

                    cuidador.setIdHost(idCuidador);
                    cuidador.setNome("Maria Pereira");
                    cuidador.setDataNascimento( "2022-05-18");
                    cuidador.setCpf("123");
                    cuidador.setEmail("cuidadortop@123");
                    cuidador.setSenha("123");
                    cuidador.setFoto("C:fakepathbanner.jpeg");
                    cuidador.setBiografia( "AAA");
                    cuidador.setPossuiAnimais(1);
                    cuidador.setPossuiCriancas(1);
                    cuidador.setPreferencias( "AAA");
                    cuidador.setMoradia("");
                    cuidador.setLimitacoes("ss");
                    cuidador.setSexo(1);
                    cuidador.setCep("06604235");
                    cuidador.setEndereco("");
                    cuidador.setBairro("");
                    cuidador.setCidade("");
                    cuidador.setComplemento("AAA");
                    cuidador.setNumero(123);
                    cuidador.setValorHora(44);

            Call<Cuidador> callEditar = routerInterface.editarCuidador(cuidador);

            callEditar.enqueue(new Callback<Cuidador>() {
                @Override
                public void onResponse(Call<Cuidador> call, Response<Cuidador> response) {
                    Log.d("API-", String.valueOf(response));
                    Intent intent = new Intent(EditarPerfilCuidador.this,MainActivity.class);
                    startActivity(intent);
                }

                @Override
                public void onFailure(Call<Cuidador> call, Throwable t) {
                    Log.d("API-", "Não atualizou o cuidador ");
                    Log.d("API-", String.valueOf(t));
                }
            });



        });

        btnAlterarSenha.setOnClickListener(view -> {
            Intent intent = new Intent(this,AlterarSenha.class);
            intent.putExtra("idCuidador", idCuidador);
            startActivity(intent);
        });


        btncExcluirMinhaConta.setOnClickListener(view ->{

            Call<Cuidador> callExcluir = routerInterface.excluirCuidador(idCuidador);

            AlertDialog dialog = new AlertDialog.Builder(this).setTitle("CONFIRMAÇÃO DE EXCLUSÃO DE CONTA")
                    .setMessage("VOCÊ EXCLUIRÁ SUA CONTA E TODOS SEUS REGISTROS, TEM CERTEZA DISTO?")
                    .setPositiveButton("CONFIRMAR", (dialog1, wich) -> {

                        callExcluir.enqueue(new Callback<Cuidador>() {
                            @Override
                            public void onResponse(Call<Cuidador> call, Response<Cuidador> response) {

                                Intent intent = new Intent(EditarPerfilCuidador.this,MainActivity.class);
                                startActivity(intent);
                                Log.d("API-", String.valueOf(response));

                            }

                            @Override
                            public void onFailure(Call<Cuidador> call, Throwable t) {

                                Log.d("API-", "Não excluiu o cuidador ");

                            }
                        });

                    })
                    .setNegativeButton("CANCELAR",(dialog1, wich)->{})
                    .create();

                    dialog.show();

        });

    }
}