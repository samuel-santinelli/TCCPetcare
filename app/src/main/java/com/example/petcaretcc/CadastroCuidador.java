package com.example.petcaretcc;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;


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
    private CardView txtFoto;
    private EditText txtPreferencias;
    private EditText txtLimitacoes;
    private EditText txtbiografia;
    private RadioGroup radioMoradia;
    private RadioGroup radioSexo;

    private Button btnCadastrar;

    private CheckBox cbPossuiCriancas;
    private int cbPossuiCriancasInt = 0;
    private CheckBox cbPossuiAnimais;
    private int cbPossuiAnimaisInt = 0;

    private TextView intentLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cadastro_cuidador);

        View decorView = getWindow().getDecorView();
        int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN;
        decorView.setSystemUiVisibility(uiOptions);

        txtNome = findViewById(R.id.txtNome);
        txtEmail = findViewById(R.id.txtEmail);
        txtDataNascimento = findViewById(R.id.txtDataDeNascimento);
        txtSenha = findViewById(R.id.txtSenha);
        txtConfirmarSenha = findViewById(R.id.txtConfirmarSenha);
        txtTelefone = findViewById(R.id.txtTelefone);
        txtCPF = findViewById(R.id.txtCpf);

        btnCadastrar = findViewById(R.id.btnCadastrar);

        radioMoradia = findViewById(R.id.radioMoradia);
        radioSexo = findViewById(R.id.radioSexo);

        btnCadastrar.setOnClickListener(view ->
        {
            Log.d("testes", "setOnClick: entrou");

            if (!camposVazios()) {

                Toast.makeText(this, "Preencha todos os campos!", Toast.LENGTH_SHORT).show();

                Log.d("testes", "CamposVazios: OK");

            } else {

                if (validacaoSenha()) {

                    Log.d("testes", "validacaoSenha: OK");

                    /**Colocar dentro do botão**/
                    cbPossuiAnimais = findViewById(R.id.checkPossuiAnimais);
                    if (cbPossuiAnimais.isChecked()) {
                        cbPossuiAnimaisInt = 1;
                    }

                    cbPossuiCriancas = findViewById(R.id.checkPossuiCriancas);
                    if (cbPossuiCriancas.isChecked()) {
                        cbPossuiCriancasInt = 1;
                    }

                    radioSexo.getCheckedRadioButtonId();
                    radioMoradia.getCheckedRadioButtonId();

                     int radioSexoInt = radioSexo.getCheckedRadioButtonId();
                     int radioMoradiaInt = radioMoradia.getCheckedRadioButtonId();


                    Intent intent = new Intent(CadastroCuidador.this, CadastroCuidadorEndereco.class);

                    intent.putExtra("txtNome", txtNome.getText().toString());
                    intent.putExtra("txtEmail", txtEmail.getText().toString());
                    intent.putExtra("txtDataNascimento",txtDataNascimento.getText().toString());
                    intent.putExtra("txtSenha",txtSenha.getText().toString());
                    intent.putExtra("txtCpf",txtCPF.getText().toString());
                    intent.putExtra("txtTelefone", txtTelefone.getText().toString());

                    if(cbPossuiCriancasInt == 1){
                        //intent.putExtra("cbPossuiCriancas", "Possui!");
                        intent.putExtra("cbPossuiCriancas", 1);
                    }
                    else{
                        //intent.putExtra("cbPossuiCriancas", "Não possui!");
                        intent.putExtra("cbPossuiCriancas", 0);
                    }

                    if(cbPossuiAnimaisInt == 1){
                        //intent.putExtra("cbPossuiAnimais", "Possui!");
                        intent.putExtra("cbPossuiAnimais", 1);
                    }
                    else{
                        intent.putExtra("cbPossuiAnimais", "Não possui!");
                        intent.putExtra("cbPossuiAnimais", 0);
                    }

                    if (radioSexoInt == 1){
                        String radioSexoString = "Feminino";
                        //intent.putExtra("radioSexo", radioSexoString);
                        intent.putExtra("radioSexo", 2);
                    }

                    if (radioSexoInt == 2){
                        String radioSexoString = "Masculino";
                        //intent.putExtra("radioSexo", radioSexoString);
                        intent.putExtra("radioSexo", 1);
                    }

                    if (radioSexoInt == 3){
                        String radioSexoString = "Não binário";
                        //intent.putExtra("radioSexo", radioSexoString);
                        intent.putExtra("radioSexo", 3);
                    }

                    if (radioMoradiaInt == 4){
                        String radioMoradiaString = "Casa";
                        intent.putExtra("radioMoradia", radioMoradiaString);
                    }else{
                        String radioMoradiaString = "Apartamento";
                        intent.putExtra("radioMoradia", radioMoradiaString);
                    }

                    startActivity(intent);

                }
            }
        });

    }



    private boolean validacaoSenha() {

            String senha = txtSenha.getText().toString();
            String confirmarSenha = txtConfirmarSenha.getText().toString();

        return senha.equals(confirmarSenha);
    }

    private boolean camposVazios() {

        return(
                    !txtNome.getText().toString().isEmpty() &&
                            !txtEmail.getText().toString().isEmpty() &&
                            !txtDataNascimento.getText().toString().isEmpty() &&
                            !txtSenha.getText().toString().isEmpty() &&
                            !txtConfirmarSenha.getText().toString().isEmpty() &&
                            !txtTelefone.getText().toString().isEmpty() &&
                            !txtCPF.getText().toString().isEmpty()
            );

    }
}


