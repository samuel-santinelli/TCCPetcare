package com.example.petcaretcc.remote;

import com.example.petcaretcc.model.Cliente;
import com.example.petcaretcc.model.Cuidador;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface RouterInterface {

    @POST("/Cuidador/Cliente/api/cliente")
    Call<Cliente> addCliente(@Body Cliente cliente);

    @POST("/Cuidador/Cuidador/api/cuidador")
    Call<Cuidador> addCuidador(@Body Cuidador cuidador);
}
