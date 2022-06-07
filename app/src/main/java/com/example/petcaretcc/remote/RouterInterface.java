package com.example.petcaretcc.remote;

import com.example.petcaretcc.model.Agendamento;
import com.example.petcaretcc.model.Cep;
import com.example.petcaretcc.model.Cliente;
import com.example.petcaretcc.model.Cuidador;
import com.example.petcaretcc.model.LoginCliente;
import com.example.petcaretcc.model.LoginCuidador;
import com.example.petcaretcc.model.Pet;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.GET;
import retrofit2.http.Headers;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface RouterInterface {

    @POST("/cliente/cadastrarcliente")
    Call<Cliente> addCliente(@Body Cliente cliente);

    @GET("/cliente/listarcliente")
    Call<List<Cliente>>getCliente();

    /**Essa forma de fazer é a correta?**/
    @GET("/cliente/login/{email}/{senha}")
    Call<List<LoginCliente>>loginCliente(@Path("email") String email, @Path("senha") String senha);

    @POST("/cuidador/cadastrarcuidador")
    Call<Cuidador> addCuidador(@Body Cuidador cuidador);

    @GET("/cuidador/login/{email}/{senha}")
    Call<List<LoginCuidador>>loginCuidador(@Path("email") String email, @Path("senha") String senha);

    @GET("/cuidador/perfil/{idCuidador}")
    Call<List<Cuidador>>perfilCuidador(@Path("idCuidador") int idCuidador);

    @PUT("/cuidador/editarcuidador")
    Call<Cuidador>editarCuidador(@Body Cuidador cuidador);

    @DELETE("/cuidador/excluircuidador/{idCuidador}")
    Call<Cuidador>excluirCuidador(@Path("idCuidador") int idCuidador);

    @GET("/agendamento/listaragendamentos/{idCuidador}")
    Call<List<Agendamento>>listarAgendamento(@Path("idCuidador") int idCuidador);

    @PUT("/cuidador/editarcuidadoraceito")
    Call<Agendamento>atualizarAgendamentoACEITO(@Body Agendamento agendamento);

    @PUT("/cuidador/editarcuidadorrecusado")
    Call<Agendamento>atualizarAgendamentoRECUSADO(@Body Agendamento agendamento);


//    @GET("/pet/perfil/{idPet}")
//    Call<List<Pet>>perfilPet(@Path("idPet") int idPet);

    //    @GET("{cep}/json/")
//    Call<Cep> consultarCEP(@Path("cep") String cep);
//
//    @GET("/cliente/perfil/{idCliente}")
//    Call<List<Cliente>>perfilCliente(@Path("idCliente") int idCliente);
}
