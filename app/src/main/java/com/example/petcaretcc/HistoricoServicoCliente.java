package com.example.petcaretcc;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.app.ActionBar;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;


import com.example.petcaretcc.model.Cliente;
import com.example.petcaretcc.remote.APIUtil;
import com.example.petcaretcc.remote.RouterInterface;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class HistoricoServicoCliente extends AppCompatActivity {

    ImageView intentLanding;
    ImageView intentPerfil;
    ImageView intentServicos;
    ImageView intentAgendamentos;

        RouterInterface routerInterface;
        List<Cliente> list = new ArrayList<Cliente>();
        RecyclerView recyclerView;


        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            getSupportActionBar().hide();
            setContentView(R.layout.activity_historico_servico_cliente);

            View decorView = getWindow().getDecorView();
            // Hide both the navigation bar and the status bar.
            // SYSTEM_UI_FLAG_FULLSCREEN is only available on Android 4.1 and higher, but as
            // a general rule, you should design your app to hide the status bar whenever you
            // hide the navigation bar.
            int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_FULLSCREEN;
            decorView.setSystemUiVisibility(uiOptions);


            intentPerfil = findViewById(R.id.iconePessoa);
            intentServicos = findViewById(R.id.intentServicos);
            intentAgendamentos = findViewById(R.id.intentHistorico);
            intentLanding = findViewById(R.id.iconeCasa);

            intentLanding.setOnClickListener(view->{
                Intent intent = new Intent(HistoricoServicoCliente.this,RecuperarSenha.class);
                startActivity(intent);
            });


            intentAgendamentos.setOnClickListener(view->{
                Intent intent = new Intent(HistoricoServicoCliente.this,HistoricoServicoCliente.class);
                startActivity(intent);
            });

            intentServicos.setOnClickListener(view->{
                Intent intent = new Intent(HistoricoServicoCliente.this,TelaAgendamento.class);
                startActivity(intent);
            });


            routerInterface = APIUtil.getClientInterface();
            recyclerView = findViewById(R.id.recyclerview);

            /** Recebe os dados de clientes vindos da APIREST **/
            Call<List<Cliente>> call = routerInterface.getCliente();

            call.enqueue(new Callback<List<Cliente>>() {
                @Override
                public void onResponse(Call<List<Cliente>> call, Response<List<Cliente>> response) {

                    if (response.isSuccessful()){

                        Log.d("API-BOM SUCESS", String.valueOf(response.body()));

                    }else{
                        Log.d("API-ERRO", "dentro do onResponse");

                    }

                    list =  response.body();

                    Log.d("API-lista", String.valueOf(list));


                    recyclerView.setAdapter(new ClienteAdapter(list));
                }

                @Override
                public void onFailure(Call<List<Cliente>> call, Throwable t) {
                    Log.d("API-ERRO ONFAILURE", t.getMessage());
                }
            });

        }
        /** CLASSE DE ADAPTER DO RECYCLERVIEW **/
        private class ClienteAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {
            // Recebe todos os itens
            List<Cliente> itens;

            public ClienteAdapter(List<Cliente> itens) {
                this.itens = itens;
            }// FIM DO METODO CONSTRUTOR DE LIVROADAPTER

            @NonNull
            @Override
            public RecyclerView.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
                /**Infla a estrutura xml e os dados referentes a cliente**/
                if(viewType == 0){
                    return new ClienteAdapter.ClienteViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_conteiner_cliente, parent, false));
                }
                return null;
            }

            @Override
            public void onBindViewHolder(@NonNull RecyclerView.ViewHolder holder, int position) {
                /** Recupera os dados de cliente **/

                    Cliente cliente = (Cliente) itens.get(position);
                    ((ClienteAdapter.ClienteViewHolder) holder).setClienteData(cliente);

                    Log.d("API-onBind", String.valueOf(cliente));
            }

            @Override
            public int getItemCount() {
                return itens.size();
            }

            /** CLASSE DE VIEWHOLDER DA RECYCLERVIEW **/
            // classe filha herda a classe pai
            class ClienteViewHolder extends RecyclerView.ViewHolder {

                private TextView txtNome, txtEmail, txtDataNascimento, txtCpf, txtTelefone, txtSexo;
                private int id_cliente, txtSexoInt;

                public ClienteViewHolder(@NonNull View itemView) {
                    super(itemView);

                    txtNome = itemView.findViewById(R.id.txtNome);
                    txtEmail = itemView.findViewById(R.id.txtEmail);
                    txtDataNascimento = itemView.findViewById(R.id.txtDataDeNascimento);
                    txtCpf = itemView.findViewById(R.id.txtCpf);
                    txtSexo = itemView.findViewById(R.id.txtSexo);
                    txtTelefone = itemView.findViewById(R.id.txtTelefone);

                    /** TRATAMENTO DE CLIQUE PARA A ALTERAÇÃO E EXCLUSÃO DE cliente **/
                }// FIM DO MÉTODO CONSTRUTOR DE LIVROVIEWHOLDER

                public void setClienteData(Cliente cliente){


                    Log.d("API-setData", String.valueOf(cliente));

                    txtNome.setText(cliente.getNome());
                    txtEmail.setText(cliente.getEmail());
                    txtDataNascimento.setText(cliente.getDataNascimento());
                    txtCpf.setText(cliente.getCpf());
                    txtTelefone.setText(cliente.getTelefone());
                    id_cliente = cliente.getIdCliente();
                    //txtSexo.setText(cliente.getSexo());

                    txtSexoInt = cliente.getSexo();

                    if (txtSexoInt == 1){
                        txtSexo.setText("Masculino");
                    }
                    if(txtSexoInt == 2){
                        txtSexo.setText("Feminino");
                    }
                    if(txtSexoInt == 3){
                        txtSexo.setText("Não binário");
                    }

                    Log.d("API-", String.valueOf(cliente.getSexo()));

                }


            }// FIM DA CLASSE DE LIVROVIEWHOLDER
        }// FIM DA CLASSE DO LIVROADAPTER

}