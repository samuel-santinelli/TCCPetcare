package com.example.petcaretcc.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Pet{

    @SerializedName("nome")
    @Expose
    private String nome;

    @SerializedName("deficiencia")
    @Expose
    private String deficiencia;

    @SerializedName("castrado")
    @Expose
    private int castrado;

    @SerializedName("foto")
    @Expose
    private String foto;

    @SerializedName("idRaca")
    @Expose
    private int idRaca;

    @SerializedName("idFase")
    @Expose
    private int idFase;

    @SerializedName("idEspecie")
    @Expose
    private int idEspecie;

    @SerializedName("idCliente")
    @Expose
    private int idCliente;

    @SerializedName("comportamento")
    @Expose
    private String comportamento;

    @SerializedName("idVacina")
    @Expose
    private int idVacina;

    public Pet(){

    }

    public Pet(String nome, String deficiencia, int castrado, String foto, int idRaca, int idFase, int idEspecie, int idCliente, String comportamento, int idVacina) {
        this.nome = nome;
        this.deficiencia = deficiencia;
        this.castrado = castrado;
        this.foto = foto;
        this.idRaca = idRaca;
        this.idFase = idFase;
        this.idEspecie = idEspecie;
        this.idCliente = idCliente;
        this.comportamento = comportamento;
        this.idVacina = idVacina;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDeficiencia() {
        return deficiencia;
    }

    public void setDeficiencia(String deficiencia) {
        this.deficiencia = deficiencia;
    }

    public int getCastrado() {
        return castrado;
    }

    public void setCastrado(int castrado) {
        this.castrado = castrado;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public int getIdRaca() {
        return idRaca;
    }

    public void setIdRaca(int idRaca) {
        this.idRaca = idRaca;
    }

    public int getIdFase() {
        return idFase;
    }

    public void setIdFase(int idFase) {
        this.idFase = idFase;
    }

    public int getIdEspecie() {
        return idEspecie;
    }

    public void setIdEspecie(int idEspecie) {
        this.idEspecie = idEspecie;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    public String getComportamento() {
        return comportamento;
    }

    public void setComportamento(String comportamento) {
        this.comportamento = comportamento;
    }

    public int getIdVacina() {
        return idVacina;
    }

    public void setIdVacina(int idVacina) {
        this.idVacina = idVacina;
    }
}
