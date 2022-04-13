import React, { useEffect, useState } from "react";
import axios from "axios";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessIcon from "@mui/icons-material/Business";
import PanToolIcon from "@mui/icons-material/PanTool";
import HouseIcon from "@mui/icons-material/House";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import InfoIcon from '@mui/icons-material/Info';
import "../style/Cadastro.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const InputsIconNextPage = () => {
  const [userCuidadorNext, setUserCuidadorNext] = useState({
    cpf: "",
    foto: "",
    biografia: "",
    possuiAnimais: 0,
    possuiCriancas: 1,
    cep: "",
    preferencias: "",
    moradia: "",
    limitacoes: "",
    avaliacao: "",
    idSexoHost: 1,
  });
  console.log(userCuidadorNext);

  const handleUserCuidadorNextSubmit = (userCuidadorNext) => {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .post("http://localhost/Cuidador/Cuidador/api/cuidador", userCuidadorNext)
      .then((res) => console.log(res.data));
  };

  const listElementsCuidador = () => {
    axios
      .get("http://localhost/Cuidador/Cuidador/api/cuidador")
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    listElementsCuidador();
  }, []);

  return (
    <><form onSubmit={() => handleUserCuidadorNextSubmit(userCuidadorNext)}>
      <div id="containerInput">
        <div id="containerBorderImage">
          <input
            type="file"
            name="inputImage"
            className="inputImage"
            id="foto"
            value={userCuidadorNext.foto}
            onChange={(e) =>
              setUserCuidadorNext({
                ...userCuidadorNext,
                foto: e.target.value,
              })
            }
          />
          <CameraAltIcon id="iconInputCamera" />
        </div>
      </div>
      <div id="contInputsPet">
        <select
          value={userCuidadorNext.idSexoHost}
          id="InputsContainerSelect"
          onChange={(e) =>
            setUserCuidadorNext({
              ...userCuidadorNext,
              idSexoHost: e.target.value,
            })
          }
        >
          <option value={userCuidadorNext.idMasculino}>Masculino</option>
          <option value={userCuidadorNext.idFemininio}>Femininio</option>
        </select>
        <AssignmentIndIcon id="iconInputLabel" />
        <input
          label="CPF"
          id="cpf"
          className="containerInputs"
          placeholder="CPF"
          value={userCuidadorNext.cpf}
          onChange={(e) =>
            setUserCuidadorNext({ ...userCuidadorNext, cpf: e.target.value })
          }
        />
      </div>
      <div id="contInputsPetCheckbox">
        <div id="contInputCheckbox">
          <label className="labelInputCheckboxCuidador">
            Possui Animais
            <input
              type="checkbox"
              value={userCuidadorNext.possuiAnimais}
              onChange={(e) =>
                setUserCuidadorNext({
                  ...userCuidadorNext,
                  possuiAnimais: e.target.value,
                })
              }
            />
            <span className="checkmarkCuidador"></span>
          </label>
        </div>
        <div id="contInputCheckbox">
          <label className="labelInputCheckboxCuidador">
            Possui Crianças?
            <input
              type="checkbox"
              value={userCuidadorNext.possuiCriancas}
              onChange={(e) =>
                setUserCuidadorNext({
                  ...userCuidadorNext,
                  possuiCriancas: e.target.value,
                })
              }
            />
            <span className="checkmarkCuidador"></span>
          </label>
        </div>
      </div>
      <div id="contInputsPet">
        <PanToolIcon id="iconInputLabel" />
        <input
          label="Preferências"
          id="limitacoes"
          className="containerInputLimitacoes"
          placeholder="Você possui limitações?"
          value={userCuidadorNext.limitacoes}
          onChange={(e) =>
            setUserCuidadorNext({
              ...userCuidadorNext,
              limitacoes: e.target.value,
            })
          }
        />
      </div>
      <div id="contInputsMoradia">
        <BusinessIcon id="iconInputLabelLeft" />
        <input
          id="cep"
          className="containerInputMoradia"
          placeholder="Informe seu cep"
          type="number"
          value={userCuidadorNext.cep}
          onChange={(e) =>
            setUserCuidadorNext({ ...userCuidadorNext, cep: e.target.value })
          }
        />

        <HouseIcon id="iconInputLabelLeft" />
        <input
          label="Moradia"
          id="moradia"
          className="containerInputMoradia"
          placeholder="Aonde você reside?"
          value={userCuidadorNext.moradia}
          onChange={(e) =>
            setUserCuidadorNext({
              ...userCuidadorNext,
              moradia: e.target.value,
            })
          }
        />
        <div>
          <div className="containerPreferences">
            <AccessibilityIcon id="iconInputLabel" />
            <input
              label="Preferências"
              id="preferencias"
              placeholder="Possui alguma preferência?"
              className="containerInputPreferencias"
              value={userCuidadorNext.preferencias}
              onChange={(e) =>
                setUserCuidadorNext({
                  ...userCuidadorNext,
                  preferencias: e.target.value,
                })
              }
            />
            <div className="containerInputBiografia">
            <InfoIcon id="iconInputLabel"/>
              <input
                id="biografia"
                placeholder="Me diga um pouco sobre você"
                className="inputBiografia"
                value={userCuidadorNext.biografia}
                onChange={(e) =>
                  setUserCuidadorNext({
                    ...userCuidadorNext,
                    biografia: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div id="containerButton">
            <input
              value="Cadastrar"
              type="submit"
              id="buttonCadastrar"
              className="button"
            />
          </div>
        </div>
      </div>
      </form>
    </>
  );
};

export default InputsIconNextPage;
