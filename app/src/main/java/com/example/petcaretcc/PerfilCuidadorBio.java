package com.example.petcaretcc;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.petcaretcc.model.Cuidador;
import com.example.petcaretcc.model.LoginCliente;
import com.example.petcaretcc.model.LoginCuidador;
import com.example.petcaretcc.remote.APIUtil;
import com.example.petcaretcc.remote.RouterInterface;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class PerfilCuidadorBio extends AppCompatActivity {

    String limitacoes;
    String preferencias;
    String nome;
    String biografia;

    int sexo;
    int possuiAnimais;
    int possuiCriancas;
    double valor;

    String valorHoraString;

    ImageView intentEditarPerfil;
    TextView intentDetalhes;

    TextView txtLimitacoes;
    TextView txtPreferencias;
    TextView txtNome;
    TextView txtBiografia;


    TextView txtPossuiAnimais;
    TextView txtPossuiCriancas;
    TextView txtValorHora;

    RouterInterface routerInterface;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_perfil_cuidador_bio);

        routerInterface = APIUtil.getClientInterface();

        View decorView = getWindow().getDecorView();

        int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION;
        decorView.setSystemUiVisibility(uiOptions);

        intentDetalhes = findViewById(R.id.tvDetalhes);
        intentEditarPerfil = findViewById(R.id.ivEditarPerfil);

        txtLimitacoes = findViewById(R.id.txtLimitacoesPerfil);
        txtPreferencias = findViewById(R.id.txtPreferenciasPerfil);
        txtNome = findViewById(R.id.tvNomeCuidador);
        txtBiografia = findViewById(R.id.txtBiografia);


        txtPossuiAnimais = findViewById(R.id.PossuiAnimais);
        txtPossuiCriancas = findViewById(R.id.PossuiCriancas);
        txtValorHora = findViewById(R.id.valorHora);

        int idCuidador = getIntent().getExtras().getInt("idCuidador");
        Log.d("API-idCuidador", String.valueOf(idCuidador));

        String intentPerfilLogica = getIntent().getExtras().getString("intentPerfilLogica");
        Log.d("API-logicaIntent", String.valueOf(intentPerfilLogica));

        intentEditarPerfil.setOnClickListener(view->{
            Intent intent = new Intent(this,EditarPerfilCuidador.class);
            intent.putExtra("idCuidador", idCuidador);
            startActivity(intent);
        });

        intentDetalhes.setOnClickListener(view->{
            Intent intent = new Intent(this,PerfilCuidadorDetalhes.class);

            intent.putExtra("intentPerfilLogica", intentPerfilLogica);
            intent.putExtra("idCuidador", idCuidador);

            startActivity(intent);
        });

        Call<List<Cuidador>> call = routerInterface.perfilCuidador(idCuidador);

        Log.d("API-Fora do enqueue", String.valueOf(intentPerfilLogica));

        call.enqueue(new Callback<List<Cuidador>>() {


            @Override
            public void onResponse(Call<List<Cuidador>> call, Response<List<Cuidador>> response) {

                Log.d("API-", "DENTRO DO ON RESPONSE");

                Log.d("API-", String.valueOf((response.body().get(0).getLimitacoes())));

                Log.d("API-", String.valueOf((response.body().get(0).getLimitacoes())));
                Log.d("API-", String.valueOf((response.body().get(0).getPreferencias())));

                possuiAnimais = response.body().get(0).getPossuiAnimais();
                possuiCriancas = response.body().get(0).getPossuiCriancas();

                Log.d("API-", String.valueOf((response.body().get(0).getPossuiAnimais())));
                Log.d("API-", String.valueOf((response.body().get(0).getPossuiCriancas())));

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

                limitacoes = response.body().get(0).getLimitacoes();
                preferencias = response.body().get(0).getPreferencias();
                nome = response.body().get(0).getNome();
                biografia = response.body().get(0).getBiografia();


                valor = response.body().get(0).getValorHora();
                valorHoraString = String.valueOf(valor);
                txtValorHora.setText(valorHoraString);

                txtLimitacoes.setText(limitacoes);
                txtPreferencias.setText(preferencias);
                txtNome.setText(nome);
                txtBiografia.setText(biografia);

            }

            @Override
            public void onFailure(Call<List<Cuidador>> call, Throwable t) {
                Log.d("API-", String.valueOf(t));
            }
        });

    }
}