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
import { useNavigate } from "react-router-dom";
import "../style/Cadastro.css";
import "../style/CadastroCliente.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import validarSenhaForca from "./validation/validation";

const sexoMap = {
  1: "Masculino",
  2: "Feminino",
};

const InputsIcon = (props) => {
  const [cuidador, setCuidador] = useState({
    nome: "",
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
    cep: "",
    endereco: "",
    bairro: "",
    cidade: "",
    numero: "",
    complemento: "",
    valorHora: "",
    idSexoHost: 1,
  });

  console.log(cuidador);
  const navigate = useNavigate();

  const handleUserCuidadorSubmit = () => {
    axios
      .post("http://localhost/Cuidador/Cuidador/api/cuidador", cuidador)
      .then((res) => window.localStorage.setItem("cuidador", JSON.stringify(res.data)));
    navigate("/Agendamento");
    alert("Cadastro realizado com sucesso!")
  };
  const listElements = () => {
    axios
      .get("http://localhost/Cuidador/Cuidador/api/cuidador")
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    listElements();
  }, []);

  const pesquisarCep = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const cepValido = (cep) => /^[0-9]{8}$/.test(cep);

  const limparFormulario = () => {
    document.querySelector("#endereco").value = "";
    document.querySelector("#bairro").value = "";
    document.querySelector("#cidade").value = "";
  };

  const preencherFormulario = async (evento) => {
    const cep = evento.target.value.replace("-", "");
    limparFormulario();
    if (cepValido(cep)) {
      const infoCep = await pesquisarCep(cep);
      if (infoCep.erro) {
        document.querySelector("#endereco").value =
          "CEP não encontrado, tente novamente.";
      } else {
        document.querySelector("#endereco").value = infoCep.logradouro;
        document.querySelector("#bairro").value = infoCep.bairro;
        document.querySelector("#cidade").value = infoCep.localidade;
      }
    } else {
      document.querySelector("#endereco").value =
        "CEP invalido, por favor digite um cep valido!";
    }
  };

  document.addEventListener("focusout", preencherFormulario);

  return (
    <>
      <form onSubmit={() => handleUserCuidadorSubmit(cuidador)} encType="multipart/form-data">
        <div id="teste">
          <div id="containerInput">
            <div id="containerBorderImage">
              <input
                type="file"
                name="inputImage"
                className="inputImage"
                accept="image/jpeg, image/jpg, image/png"
                id="foto"
                onChange={(e) =>
                  setCuidador({ ...cuidador, foto: e.target.value })
                }
              />
              <CameraAltIcon id="iconInputCamera" />
            </div>
          </div>
          <div id="contInputsPet">
            {/* <MdAccountCircle id="iconInputLabel" /> */}
            <input
              id="nome"
              className="containerInputNomeCuidador"
              placeholder="Nome"
              type="text"
              value={cuidador.nome}
              required
              onChange={(e) =>
                setCuidador({ ...cuidador, nome: e.target.value })
                
              }
            />
            {/* <MdOutlineAccountCircle id="iconInputLabel" /> */}
          </div>
          <div id="contInputStretch">
            {/* <MdAlternateEmail id="iconInputLabel" /> */}
            <input
              label="Email"
              id="email"
              type="email"
              className="containerInputEmailScroll"
              placeholder="Email"
              required
              value={cuidador.email}
              onChange={(e) =>
                setCuidador({ ...cuidador, email: e.target.value })
              }
            />
          </div>
          <div id="contInputsPet">
            {/* <MdLock id="iconInputLabel" /> */}
            <input
              id="senha"
              type="password"
              onKeyUp={validarSenhaForca}
              className="containerInputSenhaCuidador"
              placeholder="Senha"
              required
              value={cuidador.senha}
              onChange={(e) =>
                setCuidador({ ...cuidador, senha: e.target.value })
              }
            />

            {/* <MdLockOpen id="iconInputLabel" /> */}
            <input
              label="Confirmar Senha"
              id="confirmarSenha"
              type="password"
              className="containerInputConfirmarSenha"
              placeholder="Confirmar Senha"
              required
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
                <option value={1}>Masculino</option>
                <option value={2}>Feminino</option>
              </select>
              <div>
                {/* <MdFingerprint className="iconInputLabelCpf"/> */}
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
              <div id="contInputCheckboxScrollAnimals">
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
                value={cuidador.cep}
                onChange={(e) =>
                  setCuidador({ ...cuidador, cep: e.target.value })
                }
              />
              <label htmlFor="cep"></label>
              {/* <HouseIcon id="iconInputLabelLeft" /> */}
              <input
                label="Moradia"
                type="text"
                id="endereco"
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
              <label htmlFor="endereco"></label>

              <div id="contInputsScroll">
                {/* <BusinessIcon id="iconInputLabelLeft" /> */}
                <input
                  className="containerInputMoradiaScroll"
                placeholder="Cidade"
                  type="text"
                  id="cidade"
                  value={cuidador.cidade}
                  onChange={(e) =>
                    setCuidador({ ...cuidador, cidade: e.target.value })
                  }
                />
                <label htmlFor="cidade"></label>
                <input
                  className="containerInputLocal"
                  placeholder="Bairro"
                  type="text"
                  id="bairro"
                />
                <label htmlFor="bairro"></label>
                {/* <HouseIcon id="iconInputLabelLeft" /> */}
              </div>
              <div id="contInputsScroll">
                {/* <BusinessIcon id="iconInputLabelLeft" /> */}
                <input
                  className="containerInputMoradiaScroll"
                  placeholder="Numero da casa"
                  type="number"
                  id="numero"
                  value={cuidador.numero}
                  onChange={(e) =>
                    setCuidador({ ...cuidador, numero: e.target.value })
                  }
                />
                <label htmlFor="numero"></label>
                <input
                  type="text"
                  className="containerInputLocal"
                  placeholder="Complemento"
                  value={cuidador.complemento}
                  onChange={(e) =>
                    setCuidador({
                      ...cuidador,
                      complemento: e.target.value,
                    })
                  }
                />
              </div>
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
                      placeholder="Conte um pouco sobre você"
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
                      id="valorHora"
                      placeholder="Valor por hora"
                      className="containerInputEmailScroll"
                      value={cuidador.valorHora}
                      type="text"
                      onChange={(e) =>
                        setCuidador({
                          ...cuidador,
                          valorHora: e.target.value,
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
