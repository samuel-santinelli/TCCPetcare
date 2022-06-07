package com.example.petcaretcc;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.petcaretcc.model.Cuidador;
import com.example.petcaretcc.remote.APIUtil;
import com.example.petcaretcc.remote.RouterInterface;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class PerfilCuidadorDetalhes extends AppCompatActivity {

    ImageView intentEditarPerfil;
    TextView intentBio;

    int cep;
    String cpf;
    String email;
    String moradia;
    String nome;
    String valorHoraString;

    int sexo;
    int possuiAnimais;
    int possuiCriancas;
    double valor;

    TextView txtCep;
    TextView txtCpf;
    TextView txtEmail;
    TextView txtMoradia;
    TextView txtSexo;
    TextView txtNome;

    TextView txtPossuiAnimais;
    TextView txtPossuiCriancas;
    TextView txtValorHora;

    RouterInterface routerInterface;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_perfil_cuidador_detalhes);

        View decorView = getWindow().getDecorView();

        int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION;
        decorView.setSystemUiVisibility(uiOptions);

        routerInterface = APIUtil.getClientInterface();

        intentBio = findViewById(R.id.tvBio);
        intentEditarPerfil = findViewById(R.id.ivEditarPerfil);

        txtCep = findViewById(R.id.tvCep);
        txtCpf = findViewById(R.id.tvCpf);
        txtEmail = findViewById(R.id.tvEmail);
        txtMoradia = findViewById(R.id.tvMoradia);
        txtSexo = findViewById(R.id.tvSexo);
        txtNome = findViewById(R.id.tvNomeCuidador);

        txtPossuiCriancas = findViewById(R.id.PossuiCriancas);
        txtPossuiAnimais = findViewById(R.id.PossuiAnimais);
        txtValorHora = findViewById(R.id.valorHora);

        int idCuidador = getIntent().getExtras().getInt("idCuidador");
        Log.d("API-idCuidador", String.valueOf(idCuidador));

        intentEditarPerfil.setOnClickListener(view->{
            Intent intent = new Intent(this,EditarPerfilCuidador.class);
            intent.putExtra("idCuidador", idCuidador);
            startActivity(intent);
        });

        intentBio.setOnClickListener(view->{
            Intent intent = new Intent(this,PerfilCuidadorBio.class);
            startActivity(intent);
        });

        Call<List<Cuidador>> call = routerInterface.perfilCuidador(idCuidador);


        call.enqueue(new Callback<List<Cuidador>>() {
            @Override
            public void onResponse(Call<List<Cuidador>> call, Response<List<Cuidador>> response) {

                Log.d("API-CEP", String.valueOf((response.body().get(0).getCep())));
                Log.d("API-CPF", String.valueOf((response.body().get(0).getCpf())));
                Log.d("API-EMAIL", String.valueOf((response.body().get(0).getEmail())));
                Log.d("API-SEXO", String.valueOf((response.body().get(0).getSexo())));
                Log.d("API-NOME", String.valueOf((response.body().get(0).getNome())));
                Log.d("API-NUMERO", String.valueOf((response.body().get(0).getNumero())));
                Log.d("API-MORADIA", String.valueOf((response.body().get(0).getMoradia())));
                Log.d("API-DATA DE NASCIMENTO", String.valueOf((response.body().get(0).getDataNascimento())));
                Log.d("API-POSSUI CRIANCAS", String.valueOf((response.body().get(0).getPossuiCriancas())));
                Log.d("API-POSSUI ANIMAIS", String.valueOf((response.body().get(0).getPossuiAnimais())));
                Log.d("API-COMPLEMENTO", String.valueOf((response.body().get(0).getComplemento())));
                Log.d("API-VALOR HORA", String.valueOf((response.body().get(0).getValorHora())));


                possuiAnimais = response.body().get(0).getPossuiAnimais();
                possuiCriancas = response.body().get(0).getPossuiCriancas();

                if (possuiCriancas == 0){
                    txtPossuiCriancas.setText("Não possui");
                }else{
                    txtPossuiCriancas.setText("Possui!");
                }

                if (possuiAnimais == 0){
                    txtPossuiAnimais.setText("Não possui!");
                }else{
                    txtPossuiAnimais.setText("Possui!");
                }

                cep = response.body().get(0).getCep();
                nome = response.body().get(0).getNome();
                cpf = response.body().get(0).getCpf();
                email = response.body().get(0).getEmail();
                moradia = response.body().get(0).getMoradia();
                sexo = response.body().get(0).getSexo();

                valor = response.body().get(0).getValorHora();
                valorHoraString = String.valueOf(valor);

                txtValorHora.setText(valorHoraString);
                //txtCep.setText(response.body().get(0).getCep());
                Log.d("API-", String.valueOf(cep));
                txtCpf.setText(response.body().get(0).getCpf());
                txtEmail.setText(response.body().get(0).getEmail());
                txtNome.setText(response.body().get(0).getNome());
                txtMoradia.setText(response.body().get(0).getMoradia());

                Log.d("API-", nome);
                Log.d("API-", valorHoraString);
                Log.d("API-", String.valueOf(cep));
                Log.d("API-", cpf);
                Log.d("API-", moradia);

                if (sexo == 1){
                    txtSexo.setText("Masculino");
                }
                if (sexo == 2){
                    txtSexo.setText("Feminino");
                }
                if (sexo == 3){
                    txtSexo.setText("Não binário");
                }

            }

            @Override
            public void onFailure(Call<List<Cuidador>> call, Throwable t) {
                Log.d("API-", String.valueOf(t));
            }
        });

    }
}