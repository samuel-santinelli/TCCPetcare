package com.example.petcaretcc.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

    public class LoginCuidador {

        @SerializedName("idHost")
        @Expose
        private int idCuidador;

        @SerializedName("email")
        @Expose
        private String emailCuidador;

        @SerializedName("senha")
        @Expose
        private String senhaCuidador;

        public int getIdCuidador() {
            return idCuidador;
        }


        public void setIdCuidador(int idCuidador) {
            this.idCuidador = idCuidador;
        }

        public String getEmailCuidador() {
            return emailCuidador;
        }

        public void setEmailCuidador(String emailCliente) {
            this.emailCuidador = emailCuidador;
        }

        public String getSenhaCuidador() {
            return senhaCuidador;
        }

        public void setSenhaCuidador(String senhaCuidador) {
            this.senhaCuidador = senhaCuidador;
        }
    }