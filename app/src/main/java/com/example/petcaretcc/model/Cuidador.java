package com.example.petcaretcc.model;

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

    @SerializedName("biografia")
    @Expose
    private String biografia;

    @SerializedName("cpf")
    @Expose
    private String cpf;

    @SerializedName("limitacoes")
    @Expose
    private String limitacoes;

    @SerializedName("preferencias")
    @Expose
    private String preferencias;

    @SerializedName("cep")
    @Expose
    private int cep;

    @SerializedName("numero")
    @Expose
    private int numero;

    @SerializedName("dataNascimento")
    @Expose
    private String dataNascimento;

    @SerializedName("foto")
    @Expose
    private String foto;

    @SerializedName("idSexoHost")
    @Expose
    private int sexo;

    @SerializedName("moradia")
    @Expose
    private String moradia;

    @SerializedName("idHost")
    @Expose
    private int idHost;

    @SerializedName("possuiAnimais")
    @Expose
    private int possuiAnimais;

    @SerializedName("possuiCriancas")
    @Expose
    private int possuiCriancas;

    @SerializedName("complemento")
    @Expose
    private String complemento;

    @SerializedName("cidade")
    @Expose
    private String cidade;

    @SerializedName("endereco")
    @Expose
    private String endereco;

    @SerializedName("bairro")
    @Expose
    private String bairro;

    @SerializedName("valorHora")
    @Expose
    private double valorHora;

    public Cuidador (){

    }

    public Cuidador(String nome, String email, String senha, String cpf, String dataNascimento, int cep, String foto, String moradia, int possuiAnimais, int possuiCriancas, int sexo, String limitacoes, String preferencias, String telefone, int numero, String biografia, double valorHora, String complemento, int idHost, String estado, String cidade, String endereco, String bairro){
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
        this.numero = numero;
        this.biografia = biografia;
        this.valorHora = valorHora;
        this.complemento = complemento;
        this.cidade = cidade;
        this.endereco = endereco;
        this.bairro = bairro;
        this.idHost = idHost;
    }

    public String getNome() { return nome; }

    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    public String getSenha() { return senha; }

    public void setSenha(String senha) { this.senha = senha; }

    public String getCpf() { return cpf; }

    public void setCpf(String cpf) { this.cpf = cpf; }

    public String getLimitacoes() { return limitacoes; }

    public void setLimitacoes(String limitacoes) { this.limitacoes = limitacoes; }

    public String getPreferencias() { return preferencias; }

    public void setPreferencias(String preferencias) { this.preferencias = preferencias; }

    public int getCep() { return cep; }

    public void setCep(int cep) { this.cep = cep; }

    public String getDataNascimento() { return dataNascimento; }

    public String getFoto() { return foto; }

    public void setFoto(String foto) { this.foto = foto; }

    public void setDataNascimento(String dataNascimento) { this.dataNascimento = dataNascimento; }

    public void setCep(String cep) { }

    public int getNumero() { return numero; }

    public void setNumero(int numero) { this.numero = numero; }

    public int getSexo() { return sexo; }

    public void setSexo(int sexo) { this.sexo = sexo; }

    public String getMoradia() { return moradia; }

    public void setMoradia(String moradia) { }

    public int getPossuiAnimais() { return possuiAnimais; }

    public void setPossuiAnimais(int possuiAnimais) { this.possuiAnimais = possuiAnimais; }

    public int getPossuiCriancas() { return possuiCriancas; }

    public void setPossuiCriancas(int possuiCriancas) { this.possuiCriancas = possuiCriancas; }

    public String getBiografia() {
        return biografia;
    }

    public void setBiografia(String biografia) {
        this.biografia = biografia;
    }

    public double getValorHora() { return valorHora; }

    public void setValorHora(double valorHora) { this.valorHora = valorHora; }

    public String getComplemento() { return complemento; }

    public void setComplemento(String complemento) { this.complemento = complemento; }

    public String getCidade() { return cidade; }

    public void setCidade(String cidade) { this.cidade = cidade; }

    public String getEndereco() { return endereco; }

    public void setEndereco(String endereco) { this.endereco = endereco; }

    public String getBairro() { return bairro; }

    public void setBairro(String bairro) { this.bairro = bairro;}

    public int getIdHost() {
        return idHost;
    }

    public void setIdHost(int idHost) {
        this.idHost = idHost;
    }
}
