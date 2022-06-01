import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
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
    limitacoes: "",
    cep: "",
    moradia: "",
    endereco: "",
    bairro: "",
    cidade: "",
    numero: "",
    complemento: "",
    valorHora: "",
    telefone: "",
    idSexoHost: 1,
  });

  console.log(cuidador);
  const navigate = useNavigate();

  const imgRef = useRef();

  const [imagem, setImagem] = useState(null);

  const handleUserCuidadorSubmit = (e) => {
    axios
      .post("http://localhost/Cuidador/Cuidador/api/cuidador", cuidador)
      .then((res) =>
        window.localStorage.setItem("cuidador", JSON.stringify(res.data))
      );
    navigate("/Agendamento");
    alert("Cadastro realizado com sucesso!");
  };

  const handleImageSubmit = (e) => {
    if (e.target.files[0]) {
      imgRef.current.src = URL.createObjectURL(e.target.files[0]);
    }
    setImagem(e.target.files[0]);
  };
  

  const listElements = () => {
    axios
      .get("http://localhost/Cuidador/Cuidador/api/cuidador")
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    listElements();
  }, []);

  const { register, setValue } = useForm();

  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setValue("complement", data.complemento);
      });
  };

  return (
    <>
      <form
        onSubmit={() => handleUserCuidadorSubmit(cuidador)}
        encType="multipart/form-data"
      >
        <div id="teste">
          <div id="containerInput">
            <div id="containerBorderImage">
              <img className="imgPreview" alt="" ref={imgRef} />
              <input
                type="file"
                name="inputImage"
                className="inputImage"
                accept="image/jpeg, image/jpg, image/png"
                id="foto"
                onChange={handleImageSubmit}
                value={cuidador.foto}
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
                {...register("cep")}
                onBlur={checkCep}
                onChange={(e) =>
                  setCuidador({ ...cuidador, cep: e.target.value })
                }
              />
              {/* <HouseIcon id="iconInputLabelLeft" /> */}
              <input
                label="Moradia"
                type="text"
                id="endereco"
                className="containerInputLocal"
                placeholder="Aonde você reside?"
                value={cuidador.moradia}
                {...register("address")}
                onChange={(e) =>
                  setCuidador({
                    ...cuidador,
                    moradia: e.target.value,
                  })
                }
              />

              <div id="contInputsScroll">
                {/* <BusinessIcon id="iconInputLabelLeft" /> */}
                <input
                  className="containerInputMoradiaScroll"
                  placeholder="Cidade"
                  type="text"
                  id="cidade"
                  value={cuidador.cidade}
                  {...register("city")}
                  onChange={(e) =>
                    setCuidador({ ...cuidador, cidade: e.target.value })
                  }
                />
                <input
                  className="containerInputLocal"
                  placeholder="Bairro"
                  type="text"
                  id="bairro"
                  {...register("neighborhood")}
                  value={cuidador.bairro}
                  onChange={(e) =>
                    setCuidador({ ...cuidador, bairro: e.target.value })
                  }
                />
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
                <input
                  type="text"
                  className="containerInputLocal"
                  placeholder="Complemento"
                  value={cuidador.complemento}
                  {...register("complement")}
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
                        placeholder="Valor diario"
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
                    <div className="containerPreferencesScroll">
                      <input
                        id="telCuidador"
                        placeholder="Numero do telefone"
                        className="containerInputEmailScroll"
                        value={cuidador.telefone}
                        type="text"
                        onChange={(e) =>
                          setCuidador({
                            ...cuidador,
                            telefone: e.target.value,
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
