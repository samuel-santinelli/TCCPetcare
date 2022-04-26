import React, { useState, useEffect } from "react";
import {
  MdAccountCircle,
  MdOutlineAccountCircle,
  MdAlternateEmail,
  MdLock,
  MdLockOpen,
  MdFingerprint,
} from "react-icons/md";
import axios from "axios";
import styles from "../style/Cadastro.css";
import "../style/CadastroCliente.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
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
            <MdAccountCircle id="iconInputLabel" />
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
            <MdOutlineAccountCircle id="iconInputLabel" />
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
            <MdAlternateEmail id="iconInputLabel" />
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
            <MdLock id="iconInputLabel" />
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

            <MdLockOpen id="iconInputLabel" />
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
              <div>
                <MdFingerprint className="iconInputLabelCpf"/>
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
            </div>
            <div id="contInputsCheckboxScroll">
              <div id="contInputCheckboxScroll">
                <label className="labelInputCheckboxCuidador">
                  Possui Animais
                  <input
                    type="checkbox"
                    value={cuidador.possuiAnimais}
                    onChange={(e) =>
                      setCuidador({
                        ...cuidador,
                        possuiAnimais: e.target.value,
                      })
                    }
                  />
                  <span className="checkmarkCuidador"></span>
                </label>
              </div>
              <div id="contInputCheckboxScroll">
                <label className="labelInputCheckboxCuidador">
                  Possui Crianças
                  <input
                    type="checkbox"
                    value={cuidador.possuiCriancas}
                    onChange={(e) => {
                      setCuidador({
                        ...cuidador,
                        possuiCriancas: e.target.value,
                      });
                    }}
                  />
                  <span className="checkmarkCuidador"></span>
                </label>
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