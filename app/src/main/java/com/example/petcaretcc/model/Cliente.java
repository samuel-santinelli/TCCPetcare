package com.example.petcaretcc.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Cliente {

    @SerializedName("idCliente")
    @Expose
    private int idCliente;

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

    @SerializedName("dataNascimento")
    @Expose
    private String dataNascimento;

    @SerializedName("cep")
    @Expose
    private String cep;

    @SerializedName("foto")
    @Expose
    private String foto;

    @SerializedName("idSexo")
    @Expose
    private int idSexo;

    @SerializedName("numero")
    @Expose
    private int numero;


    public Cliente(){

    }

    public Cliente(String nome, String email, String senha, String cpf, String telefone, String dataNascimento, String cep, int numero, int idSexo){

        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
        this.cep = cep;
        this.numero = numero;
        this.idSexo = idSexo;

    }

    public int getIdCliente() { return idCliente; }

    public void setIdCliente(int idCliente) { this.idCliente = idCliente; }

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

    public String getDataNascimento() { return dataNascimento; }

    public void setDataNascimento(String dataNascimento) { this.dataNascimento = dataNascimento; }

    public String getCep() { return cep; }

    public void setCep(String cep) { this.cep = cep; }

    public String getFoto() { return foto; }

    public void setFoto(String foto) { this.foto = foto; }

    public int getSexo() { return idSexo; }

    public void setSexo(int idSexo) { this.idSexo = idSexo; }

    public int getNumero() { return numero; }

    public void setNumero(int numero) { this.numero = numero; }
}
