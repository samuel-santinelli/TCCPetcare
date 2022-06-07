package com.example.petcaretcc;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.petcaretcc.model.Agendamento;
import com.example.petcaretcc.remote.APIUtil;
import com.example.petcaretcc.remote.RouterInterface;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LandingPage extends AppCompatActivity {


    int idPet;
    int idCliente;

    int idCuidador;

    ImageView intentLanding;
    ImageView intentPerfil;
    ImageView intentServicos;
    ImageView intentAgendamentos;

    RouterInterface routerInterface;
    List<Agendamento> list = new ArrayList<Agendamento>();
    RecyclerView recyclerView;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_landing_page);

        View decorView = getWindow().getDecorView();
        int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN;
        decorView.setSystemUiVisibility(uiOptions);


        intentPerfil = findViewById(R.id.iconePessoa);
        intentServicos = findViewById(R.id.intentServicos);
        intentAgendamentos = findViewById(R.id.intentHistorico);
        intentLanding = findViewById(R.id.iconeCasa);

        idCuidador = getIntent().getExtras().getInt("idCuidador");
        Log.d("API-idCuidador", String.valueOf(idCuidador));

        intentLanding.setOnClickListener(view->{
            Intent intent = new Intent( LandingPage.this,  LandingPage.class);
            intent.putExtra("idCuidador", idCuidador);
            startActivity(intent);
        });


        intentAgendamentos.setOnClickListener(view->{
            Intent intent = new Intent(LandingPage.this,HistoricoServicoCliente.class);
            startActivity(intent);
        });

        intentServicos.setOnClickListener(view->{
            Intent intent = new Intent(LandingPage.this,TelaAgendamento.class);
            startActivity(intent);
        });

        intentPerfil.setOnClickListener(view->{
            Intent intent = new Intent(LandingPage.this,PerfilCuidadorBio.class);
            intent.putExtra("idCuidador", idCuidador);
            startActivity(intent);
            startActivity(intent);
        });

        routerInterface = APIUtil.getClientInterface();
        recyclerView = findViewById(R.id.recyclerview);

        /* Recebe os dados de clientes vindos da APIREST */
        Call<List<Agendamento>> call = routerInterface.listarAgendamento(idCuidador);

        Log.d("API-", "call");

        call.enqueue(new Callback<List<Agendamento>>() {
            @Override
            public void onResponse(Call<List<Agendamento>> call, Response<List<Agendamento>> response) {

                if (response.isSuccessful()){
                    Log.d("API-BOM SUCESS", String.valueOf(response.body()));

                }else{
                    Log.d("API-ERRO", "dentro do onResponse");

                }

                list =  response.body();

                Log.d("API-lista", String.valueOf(list));

                recyclerView.setAdapter(new AgendamentoAdapter(list));
            }

            @Override
            public void onFailure(Call<List<Agendamento>> call, Throwable t) {
                //Log.d("API-ERRO ONFAILURE", t.getMessage());
                Log.d("API-ERRO ONFAILURE", String.valueOf(t));
            }
        });

    }
    /* CLASSE DE ADAPTER DO RECYCLERVIEW */
    private class AgendamentoAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {
        // Recebe todos os itens
        List<Agendamento> itens;

        public AgendamentoAdapter(List<Agendamento> itens) {
            this.itens = itens;
        }// FIM DO METODO CONSTRUTOR DE LIVROADAPTER

        @NonNull
        @Override
        public RecyclerView.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            if(viewType == 0){
                return new AgendamentoAdapter.AgendamentoViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_container_agendamento, parent, false));
            }
            return null;
        }

        @Override
        public void onBindViewHolder(@NonNull RecyclerView.ViewHolder holder, int position) {
            /* Recupera os dados de cliente */

            Agendamento agendamento = (Agendamento) itens.get(position);
            ((AgendamentoAdapter.AgendamentoViewHolder) holder).setAgendamentoData(agendamento);

            Log.d("API-onBind", String.valueOf(agendamento));
        }

        @Override
        public int getItemCount() {
            return itens.size();
        }

        /* CLASSE DE VIEWHOLDER DA RECYCLERVIEW */
        // classe filha herda a classe pai
        class AgendamentoViewHolder extends RecyclerView.ViewHolder {

            private TextView txtDataInicial, txtDataFinal, txtPet, txtCliente, txtTipo, txtEndereco, txtCpf, txtValor, btnAceitar, btnRecusar;
            //private Button btnAceitar, btnRecusar;

            public AgendamentoViewHolder(@NonNull View itemView) {
                super(itemView);

                txtDataInicial = itemView.findViewById(R.id.txtDataInicial);
                txtDataFinal = itemView.findViewById(R.id.txtDataFinal);
                txtPet = itemView.findViewById(R.id.txtPet);
                txtCliente = itemView.findViewById(R.id.txtCliente);
                txtTipo = itemView.findViewById(R.id.txtTipoServico);
                txtValor = itemView.findViewById(R.id.txtValor);
                txtEndereco = itemView.findViewById(R.id.txtEndereco);
                txtCpf = itemView.findViewById(R.id.txtCpf2);
                btnAceitar = itemView.findViewById(R.id.btnAceitar);
                btnRecusar = itemView.findViewById(R.id.btnRecusar);

                btnAceitar.setOnClickListener(view -> {

                            AlertDialog.Builder alertDialog = new AlertDialog.Builder(LandingPage.this)
                                    .setMessage("Você está prestes a aceitar um agendamento, tem certeza disso?!")
                                    .setPositiveButton("Confirmar", (dialog1, witch) -> {

                                        Agendamento agendamento = new Agendamento();

                                        agendamento.setStatus("Aceito");

                                        Call<Agendamento> callAgendamento = routerInterface.atualizarAgendamentoACEITO(agendamento);

                                        callAgendamento.enqueue(new Callback<Agendamento>() {
                                            @Override
                                            public void onResponse(Call<Agendamento> call, Response<Agendamento> response) {


                                                if(response.isSuccessful()){

                                                    Toast.makeText(LandingPage.this, "Agendamento aceito com sucesso!", Toast.LENGTH_SHORT).show();

                                                }else{

                                                    Toast.makeText(LandingPage.this, "Não foi possivel aceitar o agendamento!", Toast.LENGTH_SHORT).show();}

                                            }

                                            @Override
                                            public void onFailure(Call<Agendamento> call, Throwable t) {
                                                Toast.makeText(LandingPage.this, "Problemas de conexão! (Entre em contato com os desenvolvedores.)", Toast.LENGTH_SHORT).show();
                                            }
                                        });

                                        Intent intent = new Intent(LandingPage.this, LandingPage.class);
                                        intent.putExtra("idCuidador", idCuidador);
                                        startActivity(intent);
                                    })
                                    .setNegativeButton("Cancelar", (dialog1, witch) -> {

                                        Intent intent = new Intent(LandingPage.this, LandingPage.class);
                                        intent.putExtra("idCuidador", idCuidador);
                                        startActivity(intent);

                                    });

                            alertDialog.show();

                        }
                );

            }

            public void setAgendamentoData(Agendamento agendamento) {
                txtDataInicial.setText(agendamento.getDataInicio());
                txtDataFinal.setText(agendamento.getDataFinal());
                txtPet.setText(agendamento.getNomePet());
                txtCliente.setText(agendamento.getNome());
                //txtTipo.setText(agendamento.getTipoServico());
                txtValor.setText(String.valueOf(agendamento.getValor()));
                txtEndereco.setText(agendamento.getEndereco());
                txtCpf.setText(String.valueOf(agendamento.getCpf()));
            };
                /* TRATAMENTO DE CLIQUE PARA A ALTERAÇÃO E EXCLUSÃO DE cliente */
            }// FIM DO MÉTODO CONSTRUTOR DE LIVROVIEWHOLDER


        }// FIM DA CLASSE DE LIVROVIEWHOLDER

}