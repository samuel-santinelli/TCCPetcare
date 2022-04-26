package com.example.petcaretcc.model;

import android.widget.CheckBox;
import android.widget.RadioButton;
import android.widget.RadioGroup;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

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

    @SerializedName("numero")
    @Expose
    private String numero;

    @SerializedName("dataNascimento")
    @Expose
    private String dataNascimento;

    @SerializedName("foto")
    @Expose
    private String foto;

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

    public Cuidador(String nome, String email, String senha, String cpf, String dataNascimento, String cep, String foto, RadioGroup moradia, CheckBox possuiAnimais, CheckBox possuiCriancas, RadioGroup sexo, String limitacoes, String preferencias, String telefone, String numero){
        this.cep = cep;
        this.cpf = cpf;
        this.foto = foto;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.moradia = moradia;
        this.possuiCriancas = possuiCriancas;
        this.possuiAnimais = possuiAnimais;
        this.limitacoes = limitacoes;
        this.preferencias = preferencias;
        this.foto = foto;
        this.telefone = telefone;
        this.numero = numero;
    }

    public String getNome() { return nome; }

    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    public String getSenha() { return senha; }

    public void setSenha(String senha) { this.senha = senha; }

    public String getCpf() { return cpf; }

    public void setCpf(String cpf) { this.cpf = cpf; }

    public String getTelefone() { return telefone; }

    public void setTelefone(String telefone) { this.telefone = telefone; }

    public String getLimitacoes() { return limitacoes; }

    public void setLimitacoes(String limitacoes) { this.limitacoes = limitacoes; }

    public String getPreferencias() { return preferencias; }

    public void setPreferencias(String preferencias) { this.preferencias = preferencias; }

    public String getCep() { return cep; }

    public String getDataNascimento() { return dataNascimento; }

    public String getFoto() { return foto; }

    public void setFoto(String foto) { this.foto = foto; }

    public void setDataNascimento(String dataNascimento) { this.dataNascimento = dataNascimento; }

    public void setCep(String cep) { }

    public String getNumero() { return numero; }

    public void setNumero(String numero) { this.numero = numero; }

    public RadioGroup getSexo() { return sexo; }

    public void setSexo(RadioGroup sexo) { this.sexo = sexo; }

    public RadioButton getGeneroFluido() { return generoFluido; }

    public void setGeneroFluido(RadioButton generoFluido) { }

    public RadioButton getMasculino() { return masculino; }

    public void setMasculino(RadioButton masculino) { this.masculino = masculino; }

    public RadioButton getFeminino() { return feminino; }

    public void setFeminino(RadioButton feminino) { this.feminino = feminino; }

    public RadioGroup getMoradia() { return moradia; }

    public void setMoradia(RadioGroup moradia) { }

    public RadioButton getCasa() { return casa; }

    public void setCasa(RadioButton casa) { this.casa = casa; }

    public RadioButton getApartamento() { return apartamento; }

    public void setApartamento(RadioButton apartamento) { this.apartamento = apartamento; }

    public CheckBox getPossuiAnimais() { return possuiAnimais; }

    public void setPossuiAnimais(CheckBox possuiAnimais) { this.possuiAnimais = possuiAnimais; }

    public CheckBox getPossuiCriancas() { return possuiCriancas; }

    public void setPossuiCriancas(CheckBox possuiCriancas) { this.possuiCriancas = possuiCriancas; }

}
