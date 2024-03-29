import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/CadastroPet.css";
import PetsIcon from "@mui/icons-material/Pets";
import InputCamera from "./InputCamera";
import "../style/InputCheckbox.css";

const InputsPetNextPage = () => {
  const [pet, setPet] = useState({})


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
        <div id="containerButtonNext">
            <input
              value="Cadastrar"
              type="submit"
              id="buttonCadastrarNext"
              className="buttonNext"
            />
          </div>
  
      </div>
    </>
  );
};

export default InputsPetNextPage;
