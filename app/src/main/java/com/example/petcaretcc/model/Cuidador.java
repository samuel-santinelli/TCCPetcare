package com.example.petcaretcc.model;

import android.widget.CheckBox;
import android.widget.RadioButton;
import android.widget.RadioGroup;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import org.w3c.dom.Text;

public class Cuidador {

    @SerializedName("nome")
    @Expose
    private String nome;

    @SerializedName("email")
    @Expose
    private String email;

    @SerializedName("senha")
    @Expose
    private String senha;

    @SerializedName("cpf")
    @Expose
    private String cpf;

    @SerializedName("telefone")
    @Expose
    private String telefone;

    @SerializedName("limitacoes")
    @Expose
    private String limitacoes;

    @SerializedName("preferencias")
    @Expose
    private String preferencias;

    @SerializedName("cep")
    @Expose
    private String cep;

    @SerializedName("sexo")
    @Expose
    private RadioGroup sexo;
    private RadioButton generoFluido;
    private RadioButton masculino;
    private RadioButton feminino;

    @SerializedName("sexo")
    @Expose
    private RadioGroup moradia;
    private RadioButton casa;
    private RadioButton apartamento;

    @SerializedName("possuiAnimais")
    @Expose
    private CheckBox possuiAnimais;

    @SerializedName("possuiCriancas")
    @Expose
    private CheckBox possuiCriancas;


    public Cuidador (){

    }

    public Cuidador (String nome, String email, String senha, String cpf, String dataNascimento, String cep ){

    }

}
