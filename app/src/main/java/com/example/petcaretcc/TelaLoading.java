package com.example.petcaretcc;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;


public class TelaLoading extends AppCompatActivity {

    String urlDoGif =  "https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif";

    ImageView meuImageView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_tela_loading);
        meuImageView = findViewById(R.id.meuImageView);
        Glide.with(this).asGif().load(urlDoGif).into(meuImageView);

    }


}