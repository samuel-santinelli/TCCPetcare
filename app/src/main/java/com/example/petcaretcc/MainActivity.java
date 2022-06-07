package com.example.petcaretcc;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.petcaretcc.model.Cliente;
import com.example.petcaretcc.model.Cuidador;
import com.example.petcaretcc.model.LoginCliente;
import com.example.petcaretcc.model.LoginCuidador;
import com.example.petcaretcc.remote.APIUtil;
import com.example.petcaretcc.remote.RouterInterface;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.http.Body;

public class MainActivity extends AppCompatActivity {

    TextView tvCadastrar;
    TextView tvEsqueciSenha;
    CheckBox cbLembreSe;
    EditText txtEmail;
    EditText txtSenha;
    Button btnEntrarCliente;
    Button btnEntrarCuidador;

    RouterInterface routerInterface;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_main);

        View decorView = getWindow().getDecorView();
        // Hide both the navigation bar and the status bar.
        // SYSTEM_UI_FLAG_FULLSCREEN is only available on Android 4.1 and higher, but as
        // a general rule, you should design your app to hide the status bar whenever you
        // hide the navigation bar.
        int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN;
        decorView.setSystemUiVisibility(uiOptions);

        tvCadastrar = findViewById(R.id.tvEncaminhaCadastro);
        tvEsqueciSenha = findViewById(R.id.tvEsqueciSenha);
        cbLembreSe = findViewById(R.id.checkboxLembreSe);
        txtEmail = findViewById(R.id.txtEmail);
        txtSenha = findViewById(R.id.txtSenha);
        btnEntrarCliente = findViewById(R.id.btnEntreAgoraCliente);
        btnEntrarCuidador = findViewById(R.id.btnEntreAgoraCuidador);

        routerInterface = APIUtil.getClientInterface();

        //Encaminhar para tela de cadastro
        tvCadastrar.setOnClickListener(view->{
            Intent intent = new Intent(MainActivity.this,TelaRedirecionamento.class);
            startActivity(intent);
        });

        //Encaminhar para recuperação de senha
        tvEsqueciSenha.setOnClickListener(view->{
            Intent intent = new Intent(MainActivity.this,RecuperarSenha.class);
            startActivity(intent);
        });

        btnEntrarCliente.setOnClickListener(view -> {

                   if (TextUtils.isEmpty(txtEmail.getText().toString()) || TextUtils.isEmpty(txtSenha.getText().toString())){
                        Toast.makeText(MainActivity.this, "Email & Senha requiridos", Toast.LENGTH_LONG);
                   }
                   else{

                        Call<List<LoginCliente>> call = routerInterface.loginCliente(txtEmail.getText().toString(), txtSenha.getText().toString());

              call.enqueue(new Callback<List<LoginCliente>>() {
                  @Override
                  public void onResponse(Call<List<LoginCliente>> call, Response<List<LoginCliente>> response) {

                      Log.d("API-", "onResponse: ");

                      Log.d("API-", String.valueOf((response.body().get(0).getEmailCliente() )));
                      Log.d("API-", String.valueOf((response.body().get(0).getSenhaCliente() )));
                      Log.d("API-", String.valueOf((response.body().get(0).getIdCliente())));
                      //Log.d("API-", String.valueOf(response.body().get(0).getEmailCliente()));

                      String idCliente = String.valueOf(response.body().get(0).getIdCliente());

                      Intent intent = new Intent(MainActivity.this, LandingPage.class);

                      intent.putExtra("idCliente", idCliente);

                      String intentPerfilLogica = "cliente";
                      intent.putExtra("intentPerfilLogica", intentPerfilLogica);
                      startActivity(intent);

                  }

                  @Override
                  public void onFailure(Call<List<LoginCliente>> call, Throwable t) {

                      Log.d("API-", "onFailure: ");
                      Log.d("API-", String.valueOf(t));

                  }
              });

                   }


        });

        btnEntrarCuidador.setOnClickListener(view -> {

            if (TextUtils.isEmpty(txtEmail.getText().toString()) || TextUtils.isEmpty(txtSenha.getText().toString())){
                Toast.makeText(MainActivity.this, "Email & Senha requiridos", Toast.LENGTH_LONG);
            }
            else{

                Call<List<LoginCuidador>> call = routerInterface.loginCuidador(txtEmail.getText().toString(), txtSenha.getText().toString());

                call.enqueue(new Callback<List<LoginCuidador>>() {
                    @Override
                    public void onResponse(Call<List<LoginCuidador>> call, Response<List<LoginCuidador>> response) {

                        Log.d("API-", "onResponse: ");

                        Log.d("API-", String.valueOf((response.body().get(0).getEmailCuidador())));
                        Log.d("API-", String.valueOf((response.body().get(0).getSenhaCuidador())));
                        Log.d("API-", String.valueOf((response.body().get(0).getIdCuidador())));
                        Log.d("API-", String.valueOf((response.body().get(0).getIdCuidador())));
                        //Log.d("API-", String.valueOf(response.body().get(0).getEmailCliente()));

                        int idCuidador = response.body().get(0).getIdCuidador();

                        Intent intent = new Intent(MainActivity.this, LandingPage.class);

                        intent.putExtra("idCuidador", idCuidador);
                        String intentPerfilLogica = "cuidador";
                        intent.putExtra("intentPerfilLogica", intentPerfilLogica);

                        startActivity(intent);

                    }

                    @Override
                    public void onFailure(Call<List<LoginCuidador>> call, Throwable t) {

                        Log.d("API-", String.valueOf(t));
                        Log.e("API-", t.getMessage(), t);


                    }
                });

            }

        });



    }



}

