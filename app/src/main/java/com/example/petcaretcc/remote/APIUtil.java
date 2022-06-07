package com.example.petcaretcc.remote;

public class APIUtil {

    public APIUtil(){

    }
    public static final String API_URL = "http://10.107.144.16:3001";
    //public static final String API_URL = "http://10.107.144.8";

    public static RouterInterface getClientInterface(){

        return RetrofitClient.getClient(API_URL).create(RouterInterface.class);
    }

}
