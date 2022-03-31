package com.example.petcaretcc;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    TextView tvCadastrar;
    TextView tvEsqueciSenha;
    CheckBox cbLembreSe;
    EditText txtLogin;
    EditText txtSenha;
    Button btnEntrar;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        tvCadastrar = findViewById(R.id.tvEncaminhaCadastro);
        tvEsqueciSenha = findViewById(R.id.tvEsqueciSenha);
        cbLembreSe = findViewById(R.id.checkboxLembreSe);
        txtLogin = findViewById(R.id.txtLogin);
        txtSenha = findViewById(R.id.txtSenha);
        btnEntrar = findViewById(R.id.btnEntreAgora);

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

    }
}