package com.example.petcaretcc;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;

public class TelaRedirecionamento extends AppCompatActivity {

    Button btnCuidador;
    Button btnCliente;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tela_redirecionamento);

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