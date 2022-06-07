package com.example.petcaretcc;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class TelaRedirecionamento extends AppCompatActivity {

    Button btnCuidador;
    Button btnCliente;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tela_redirecionamento);

        View decorView = getWindow().getDecorView();
        // Hide both the navigation bar and the status bar.
        // SYSTEM_UI_FLAG_FULLSCREEN is only available on Android 4.1 and higher, but as
        // a general rule, you should design your app to hide the status bar whenever you
        // hide the navigation bar.
        int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN;
        decorView.setSystemUiVisibility(uiOptions);

        btnCuidador = findViewById(R.id.btnCuidador);
        btnCliente = findViewById(R.id.btnCliente);

        //Encaminhar para tela de cadastro
        btnCliente.setOnClickListener(view->{
            Intent intent = new Intent(this,CadastroCliente.class);
            startActivity(intent);
        });

        //Encaminhar para recuperação de senha
        btnCuidador.setOnClickListener(view->{
            Intent intent = new Intent(this,CadastroCuidador.class);
            startActivity(intent);
        });


    }
}