package com.example.petcaretcc.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Agendamento {

    @SerializedName("idAgendamento")
    @Expose
    private int idAgendamento;

    @SerializedName("tipoServico")
    @Expose
    private int tipoServico;

    @SerializedName("dataInicio")
    @Expose
    private String dataInicio;

    @SerializedName("dataFinal")
    @Expose
    private String dataFinal;

    @SerializedName("idCuidador")
    @Expose
    private int idCuidador;

    @SerializedName("idCliente")
    @Expose
    private int idCliente;

    @SerializedName("idPet")
    @Expose
    private int idPet;

    @SerializedName("status")
    @Expose
    private String status;

    @SerializedName("valor")
    @Expose
    private double valor;

    @SerializedName("nome")
    @Expose
    private String nome;

    @SerializedName("nomeHost")
    @Expose
    private String nomeHost;

    @SerializedName("nomePet")
    @Expose
    private String nomePet;

    @SerializedName("endereco")
    @Expose
    private String endereco;

    @SerializedName("cpf")
    @Expose
    private int cpf;



    public Agendamento (){

    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public Agendamento(int idAgendamento, int tipoServico, String dataInicio, String dataFinal, int idCuidador, int idCliente, int idPet, String status, double valor, String nome, String nomeHost, String nomePet, String endereco, int cpf) {
        this.idAgendamento = idAgendamento;
        this.tipoServico = tipoServico;
        this.dataInicio = dataInicio;
        this.dataFinal = dataFinal;
        this.idCuidador = idCuidador;
        this.idCliente = idCliente;
        this.idPet = idPet;
        this.status = status;
        this.valor = valor;
        this.nome = nome;
        this.nomeHost = nomeHost;
        this.nomePet = nomePet;
        this.endereco = endereco;
        this.cpf = cpf;
    }

    public int getIdAgendamento() {
        return idAgendamento;
    }

    public void setIdAgendamento(int idAgendamento) {
        this.idAgendamento = idAgendamento;
    }

    public int getTipoServico() {
        return tipoServico;
    }

    public void setTipoServico(int tipoServico) {
        this.tipoServico = tipoServico;
    }

    public String getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(String dataInicio) {
        this.dataInicio = dataInicio;
    }

    public String getDataFinal() {
        return dataFinal;
    }

    public void setDataFinal(String dataFinal) {
        this.dataFinal = dataFinal;
    }

    public int getIdCuidador() {
        return idCuidador;
    }

    public void setIdCuidador(int idCuidador) {
        this.idCuidador = idCuidador;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    public int getIdPet() {
        return idPet;
    }

    public void setIdPet(int idPet) {
        this.idPet = idPet;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNomeHost() {
        return nomeHost;
    }

    public void setNomeHost(String nomeHost) {
        this.nomeHost = nomeHost;
    }

    public String getNomePet() {
        return nomePet;
    }

    public void setNomePet(String nomePet) {
        this.nomePet = nomePet;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public int getCpf() {
        return cpf;
    }

    public void setCpf(int cpf) {
        this.cpf = cpf;
    }
}

