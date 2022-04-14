import React, { useState, useEffect } from "react";
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
    nome: "Melhor Cuidador",
    dataNascimento: "2000-10-12",
    cpf: "5412552452",
    email: "bestcuidador@gmail.com",
    senha: "123456",
    foto: "",
    biografia: "Melhor cuidador da região",
    possuiAnimais: 1,
    possuiCriancas: 1,
    preferencias: "possuo, tenho certos probelmas para lidar com pets",
    moradia: "Barueri, SP",
    limitacoes: "Não tenho paciência com pets",
    avaliacao: "0",
    idSexoHost: "1",
    sobrenome: "Do mundo",
  });

  console.log(cuidador);

  const handleCuidadorSubmit = (cuidador) => {
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
      <form onSubmit={() => handleCuidadorSubmit(cuidador)}>
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
              className="containerInputEmailScroll"
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
                className="inputCalendarScroll"
                onChange={(e) =>
                  setCuidador({
                    ...cuidador,
                    dataNascimento: e.target.value,
                  })
                }
              />
              <select
                value={cuidador.idSexoHost}
                id="InputsContainerSelectScroll"
                onChange={(e) =>
                  setCuidador({
                    ...cuidador,
                    idSexoHost: e.target.value,
                  })
                }
              >
                <option value={cuidador.Masculino}>Masculino</option>
                <option value={cuidador.Femininio}>Feminino</option>
              </select>
              {/* <AssignmentIndIcon id="iconInputLabel" /> */}
              <input
                type="number"
                className="containerInputCpfScroll"
                placeholder="Informe seu CPF"
                value={cuidador.cpf}
                onChange={(e) =>
                  setCuidador({ ...cuidador, cpf: e.target.value })
                }
              />
            </div>
            <div id="contInputsCheckboxScroll">
              <div id="contInputCheckboxScroll">
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
              <div id="contInputCheckboxScroll">
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
            <div id="">
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
            <div id="contInputsScroll">
              {/* <BusinessIcon id="iconInputLabelLeft" /> */}
              <input
                id="cep"
                className="containerInputMoradiaScroll"
                placeholder="Informe seu cep"
                type="number"
              />

              {/* <HouseIcon id="iconInputLabelLeft" /> */}
              <input
                label="Moradia"
                type="text"
                className="containerInputLocal"
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
                <div className="containerPreferencesScroll">
                  {/* <AccessibilityIcon id="iconInputLabel" /> */}
                  <input
                    label="Preferências"
                    type="text"
                    id="preferencias"
                    placeholder="Possui alguma preferência?"
                    className="containerInputEmailScroll"
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
                      className="containerInputEmailScroll"
                      value={cuidador.biografia}
                      type="text"
                      onChange={(e) =>
                        setCuidador({
                          ...cuidador,
                          biografia: e.target.value,
                        })
                      }
                    />
                    <div className="containerPreferencesScroll">
                    <input
                      id="avaliacao"
                      placeholder="Me diga um pouco sobre você"
                      className="containerInputEmailScroll"
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
                </div>
                <div id="containerButtonScroll">
                  <input
                    value="Cadastrar"
                    type="submit"
                    id="buttonCadastrarScroll"
                    className="button"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputsIcon;
