import { useState, useEffect } from "react";
import axios from "axios";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import "../style/Cadastro.css";
import "../style/CadastroCliente.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InputCamera from "./InputCamera";
import InputAdornment from "@mui/material/InputAdornment";
import validarSenhaForca from "./validation/validation";

const InputsIcon = () => {
  const [cuidador, setCuidador] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    dataNascimento: "",
    cpf: "",
    foto: "",
    biografia: "",
    possuiAnimais: 1,
    possuiCriancas: 1,
    preferencias: "",
    moradia: "",
    limitacoes: "",
    avaliacao: 1,
    idSexoHost: 1,
  });

  console.log(cuidador);

  const handleUserCuidadorSubmit = (cuidador) => {
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .post("http://localhost/Cuidador/Cuidador/api/cuidador", cuidador)
      .then((res) => console.log(res.data));
  };
  const listElements = () => {
    axios
      .get("http://localhost/Cuidador/Cuidador/api/cuidador")
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    listElements();
  }, []);

  return (
    <>
      <form onSubmit={() => handleUserCuidadorSubmit(cuidador)}>
        <div id="teste">
          <div id="containerInput">
            <div id="containerBorderImage">
              <input
                type="file"
                name="inputImage"
                className="inputImage"
                id="foto"
                value={cuidador.foto}
                onChange={(e) =>
                  setCuidador({ ...cuidador, foto: e.target.value })
                }
              />
              <CameraAltIcon id="iconInputCamera" />
            </div>
          </div>
          <div id="contInputsPet">
            {/* <AccountCircle id="iconInputLabel" /> */}
            <input
              id="nome"
              className="containerInputNome"
              placeholder="Nome"
              type="text"
              value={cuidador.nome}
              onChange={(e) =>
                setCuidador({ ...cuidador, nome: e.target.value })
              }
            />
            {/* <AccountCircle id="iconInputLabel" /> */}
            <input
              label="Sobrenome"
              id="sobrenome"
              type="text"
              className="containerInputSobrenome"
              placeholder="Sobrenome"
              value={cuidador.sobrenome}
              onChange={(e) =>
                setCuidador({ ...cuidador, sobrenome: e.target.value })
              }
            />
          </div>
          <div id="contInputStretch">
            {/* <AlternateEmailIcon id="iconInputLabel" /> */}
            <input
              label="Email"
              id="email"
              type="email"
              className="containerInputEmail"
              placeholder="Email"
              value={cuidador.email}
              onChange={(e) =>
                setCuidador({ ...cuidador, email: e.target.value })
              }
            />
          </div>
          <div id="contInputsPet">
            {/* <LockIcon id="iconInputLabel" /> */}
            <input
              id="senha"
              type="password"
              onKeyUp={validarSenhaForca}
              className="containerInput"
              placeholder="Senha"
              value={cuidador.senha}
              onChange={(e) =>
                setCuidador({ ...cuidador, senha: e.target.value })
              }
            />

            {/* <LockOpenIcon id="iconInputLabel" /> */}
            <input
              label="Confirmar Senha"
              id="confirmarSenha"
              type="password"
              className="containerInputConfirmarSenha"
              placeholder="Confirmar Senha"
            />
            <div id="contInputsScroll">
              <input
                type="date"
                id="dataNascimento"
                value={cuidador.dataNascimento}
                className="inputCalendar"
                onChange={(e) =>
                  setCuidador({
                    ...cuidador,
                    dataNascimento: e.target.value,
                  })
                }
              />

              <select
                value={cuidador.idSexoHost}
                id="InputsContainerSelect"
                onChange={(e) =>
                  setCuidador({
                    ...cuidador,
                    idSexoHost: e.target.value,
                  })
                }
              >
                <option value={cuidador.Masculino}>Masculino</option>
                <option value={cuidador.Femininio}>Femininio</option>
              </select>
              {/* <AssignmentIndIcon id="iconInputLabel" /> */}
              <input
                label="CPF"
                id="cpf"
                type="number"
                className="containerInputs"
                placeholder="CPF"
                value={cuidador.cpf}
                onChange={(e) =>
                  setCuidador({ ...cuidador, cpf: e.target.value })
                }
              />
            </div>
            <div id="contInputsCheckboxScroll">
              <div id="contInputCheckbox">
                <input
                  type="number"
                  value={cuidador.possuiAnimais}
                  onChange={(e) =>
                    setCuidador({
                      ...cuidador,
                      possuiAnimais: e.target.value,
                    })
                  }
                />
                {/* <span className="checkmarkCuidador"></span> */}
              </div>
              <div id="contInputCheckbox">
                <input
                  type="number"
                  value={cuidador.possuiCriancas}
                  onChange={(e) => {
                    setCuidador({
                      ...cuidador,
                      possuiCriancas: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div id="contInputsPetScroll">
              {/* <PanToolIcon id="iconInputLabel" /> */}
              <input
                label="Preferências"
                id="limitacoes"
                type="text"
                className="containerInputLimitacoes"
                placeholder="Você possui limitações?"
                value={cuidador.limitacoes}
                onChange={(e) =>
                  setCuidador({
                    ...cuidador,
                    limitacoes: e.target.value,
                  })
                }
              />
            </div>
            <div id="contInputsMoradia">
              {/* <BusinessIcon id="iconInputLabelLeft" /> */}
              <input
                id="cep"
                className="containerInputMoradia"
                placeholder="Informe seu cep"
                type="number"
              />

              {/* <HouseIcon id="iconInputLabelLeft" /> */}
              <input
                label="Moradia"
                id="moradia"
                type="text"
                className="containerInputMoradia"
                placeholder="Aonde você reside?"
                value={cuidador.moradia}
                onChange={(e) =>
                  setCuidador({
                    ...cuidador,
                    moradia: e.target.value,
                  })
                }
              />
              <div>
                <div className="containerPreferences">
                  {/* <AccessibilityIcon id="iconInputLabel" /> */}
                  <input
                    label="Preferências"
                    type="text"
                    id="preferencias"
                    placeholder="Possui alguma preferência?"
                    className="containerInputPreferencias"
                    value={cuidador.preferencias}
                    onChange={(e) =>
                      setCuidador({
                        ...cuidador,
                        preferencias: e.target.value,
                      })
                    }
                  />
                  <div className="containerInputBiografia">
                    {/* <InfoIcon id="iconInputLabel"/> */}
                    <input
                      id="biografia"
                      placeholder="Me diga um pouco sobre você"
                      className="inputBiografia"
                      value={cuidador.biografia}
                      type="text"
                      onChange={(e) =>
                        setCuidador({
                          ...cuidador,
                          biografia: e.target.value,
                        })
                      }
                    />
                    <input
                      id="avaliacao"
                      placeholder="Me diga um pouco sobre você"
                      className="inputBiografia"
                      value={cuidador.avaliacao}
                      onChange={(e) =>
                        setCuidador({
                          ...cuidador,
                          avaliacao: e.target.value,
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
          </div>
          <div id="impSenha"></div>
          <div id="impForcaSenha"></div>
          <div id="erroSenhaForca"></div>
          <div id="contInputsPet"></div>
        </div>
      </form>
    </>
  );
};

export default InputsIcon;
