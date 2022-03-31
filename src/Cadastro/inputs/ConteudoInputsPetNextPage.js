import React from "react";
import "../style/CadastroPet.css";
import PetsIcon from "@mui/icons-material/Pets";
import InputCamera from "./InputCamera";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "../style/InputCheckbox.css";
import { pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const InputsPetNextPage = () => {
  function createAluno(aluno) {
    const url = "http://seudominio/alunos/";
    const options = {
      method: "POST",
      body: JSON.stringify(aluno),
    };

    fetch(url, options);
  }

  const aluno = {
    id: "",
    nome: "Cleyde Gomes da Silva",
    email: "cleydegomes@gmail.com",
    celular: "1199988888",
    logradouro: "rua sem fim",
    bairro: "Sem nome",
    cidade: "Barueri",
    estado: "SP",
    cep: "18135300",
  };

  createAluno(aluno);

  const Input = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        height: 70,
        width: 390,
        borderColor: "#f28907",
        borderRadius: 10,
        // qualquer outra classe css aqui
      },
      "&:hover fieldset": {
        borderColor: "f28907",
        fonstSize: "14rem",
        // qualquer classe p/ efeito de hover aqui
      },
      "&.Mui-focused fieldset": {
        borderColor: "f28907",
        // qualquer classe p/ efeito de focus aqui
      },
    },
  });

  return (
    <>
      <InputCamera />
      <div id="contInputsPet">
      <PetsIcon id="iconInputLabel" />
        <input label="Nome Do Pet" id="nomePet" className="containerInputNomePet" />

        <select id="InputsContainerSelect">
          <option disabled selected>
            Vacinas
          </option>
          <option>Masculino</option>
          <option>Femininio</option>
          <option>Não Binario</option>
        </select>
      </div>
      <div id="contInputsPetCheckbox">
        <div id="contInputCheckbox">
          <label class="labelInputCheckboxCuidador">
            Possui alguma deficiência?
            <input type="checkbox" />
            <span class="checkmarkCuidador"></span>
          </label>
        </div>
        <div id="contInputCheckbox">
          <label class="labelInputCheckboxCuidador">
            Seu PET é castrado?
            <input type="checkbox" />
            <span class="checkmarkCuidador"></span>
          </label>
        </div>
      </div>
      <div>
        <div class="containerSelectPeso">
          <h3>PORTE</h3>
          <div>
            <div class="containerInputsSelectPeso">
              <label class="containerSelectPesoMarked">
                <input
                  type="radio"
                  checked="checked"
                  name="radio"
                  class="radioPeso"
                />
                <div id="peso5kg" />
                <span class="checkmarkPeso"></span>
              </label>
              <label class="containerSelectPesoMarked">
                <input type="radio" name="radio" class="radioPeso" />
                <div id="peso10kg" />
                <span class="checkmarkPeso"></span>
              </label>
              <label class="containerSelectPesoMarked">
                <input type="radio" name="radio" class="radioPeso" />
                <div id="peso20kg" />
                <span class="checkmarkPeso"></span>
              </label>
              <label class="containerSelectPesoMarked">
                <input type="radio" name="radio" class="radioPeso" />
                <div id="peso40kg" />
                <span class="checkmarkPeso"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputsPetNextPage;
