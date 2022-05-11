import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import CadastroPet from "../CadastroPet";
import BoasVindas from "../../BoasVindas/BoasVindas";
import "../style/CadastroCliente.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import validarSenhaForca from "./validation/validation";

const ConteudoInputsCliente = (props) => {
  const nome = document.getElementById("nome");
  const dataNascimento = document.getElementById("dataNascimento");
  const email = document.getElementById("email");
  const senha = document.getElementById("senhaClient");
  const confirmarSenha = document.getElementById("confirmarSenhaControl");
  const button = document.getElementById("buttonCadastrarCliente");

  const {id} = useParams();
  console.log(id);

  const [user, setUser] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    foto: "",
    email: "",
    senha: "",
    telefone: "",
    idSexo: 1,
    nomeSexo: "",
    cep: "",
    endereco: "",
    bairro: "",
    cidade: "",
    complemento: "",
    numero: "",
    id: id,
  });

  console.log(user);
  const navigate = useNavigate();
  const handleUserSubmit = (user) => {
    axios
      .post('http://localhost/Cuidador/Cliente/api/cliente/:id', user)
      .then((res) => setUser(res.data.id));
    navigate(`/CadastroPet/id=${user.id}`);
  };

  const [sexo, setSexo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/Cuidador/Cliente/api/cliente/listarSexo")
      .then((res) => {
        setSexo(res.data);
      })
      .catch(() => {
        console.log("Deu erro");
      });
  }, []);

  function validate(e) {
    const passwordValue = senha.value.trim();
    const confirmPasswordValue = confirmarSenha.value.trim();

    // if(nome.value || dataNascimento.value || email.value || senha.value || confirmarSenha.value === "") {
    //   console.log("preencha todos os campos");
    //   // e.preventDefault();
    // }

    if (senha.value !== confirmarSenha.value) {
      errorValidation(senha);
      senha.focus();
      e.preventDefault();
    }
  }

  function errorValidation(inputError) {
    const formError = inputError.parentElement;

    formError.className = "form-control error";
  }

  const listElements = () => {
    axios
      .get("http://localhost/Cuidador/Cliente/api/cliente")
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
      <form onSubmit={() => handleUserSubmit(user)}>
        <div className="containerMainInputsCliente">
          <div id="containerInput">
            <div id="containerBorderImage">
              <input
                type="file"
                name="inputImage"
                className="inputImage"
                id="foto"
                value={user.foto}
                onChange={(e) => setUser({ ...user, foto: e.target.value })}
              />
              <CameraAltIcon id="iconInputCamera" />
            </div>
          </div>
          <div id="contInputsPet">
            <AccountCircle id="iconInputLabel" />
            <input
              label="Nome"
              id="nome"
              value={user.nome}
              className="containerInputNome"
              placeholder="Nome"
              onChange={(e) => setUser({ ...user, nome: e.target.value })}
            />

            <input
              type="date"
              id="dataNascimento"
              value={user.dataNascimento}
              className="inputCalendar"
              onChange={(e) =>
                setUser({ ...user, dataNascimento: e.target.value })
              }
            />
          </div>
          <div id="contInputStretch">
            <AlternateEmailIcon id="iconInputLabel" />
            <input
              label="Email"
              id="email"
              type="email"
              value={user.email}
              className="containerInputEmail"
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div id="contInputsControl">
            <div className="form-control">
              <LockIcon id="iconInputLabelControl" />
              <input
                label="Senha"
                type="password"
                id="senhaClient"
                value={user.senha}
                className="containerInputSenhaControl"
                placeholder="Senha"
                onChange={(e) => setUser({ ...user, senha: e.target.value })}
              />
            </div>
            <div className="form-control">
              <LockOpenIcon id="iconInputLabelControl" />
              <input
                label="Confirmar Senha"
                id="confirmarSenhaControl"
                type="password"
                className="containerInputSenhaControl"
                placeholder="Confirmar Senha"
              />
            </div>
          </div>
          <div id="impSenha"></div>
          <div id="impForcaSenha"></div>
          <div id="erroSenhaForca"></div>
          <div id="contInputsPet">
            <LocationOnIcon id="iconInputLabel" />
            <select
              id="moradia"
              className="containerInput"
              value={user.idSexo}
              placeholder="Selecione seu genêro"
              onChange={(e) => setUser({ ...user, idSexo: e.target.value })}
            >
              <option value={1}>Masculino</option>
              <option value={2}>Feminino</option>
              <option value={3}>Não Binario</option>
              <option value={4}>Prefiro não dizer</option>
            </select>

            <CallIcon id="iconInputLabel" />
            <input
              label="Telefone"
              id="telefone"
              type="number"
              value={user.telefone}
              className="containerInputTelefone"
              placeholder="Telefone"
              onChange={(e) => setUser({ ...user, telefone: e.target.value })}
            />
          </div>
          <div id="contInputsPet">
            <AssignmentIndIcon id="iconInputLabel" />
            <input
              label="CPF"
              id="cpf"
              type="number"
              value={user.cpf}
              className="containerInputCpf"
              placeholder="CPF"
              onChange={(e) => setUser({ ...user, cpf: e.target.value })}
            />
          </div>
          <div id="contInputsControl">
            <div className="form-control">
              <LockOpenIcon id="iconInputLabelControl" />
              <input
                type="text"
                className="containerInputSenhaControl"
                placeholder="Informe o numero de sua residência"
                id="numero"
                value={user.numero}
                onChange={(e) => setUser({ ...user, numero: e.target.value })}
              />
              <label htmlFor="numero"></label>
            </div>
          </div>
          <div id="contInputsControl">
            <div className="form-control">
              <LockOpenIcon id="iconInputLabelControl" />
              <input
                type="text"
                className="containerInputSenhaControl"
                placeholder="Informe seu cep"
                id="cep"
                value={user.cep}
                onChange={(e) => setUser({ ...user, cep: e.target.value })}
              />
              <label htmlFor="cep"></label>
            </div>
            <div className="form-control">
              <LockIcon id="iconInputLabelControl" />
              <input
                type="text"
                className="containerInputSenhaControl"
                placeholder="Bairro"
                id="bairro"
                value={user.bairro}
                onChange={(e) => setUser({ ...user, bairro: e.target.value })}
              />
              <label htmlFor="bairro"></label>
            </div>
          </div>
          <div id="contInputsControl">
            <div className="form-control">
              <LockOpenIcon id="iconInputLabelControl" />
              <input
                type="text"
                className="containerInputSenhaControl"
                placeholder="Rua / Avenida"
                id="endereco"
                value={user.endereco}
                onChange={(e) => setUser({ ...user, endereco: e.target.value })}
              />
              <label htmlFor="endereco"></label>
            </div>
            <div className="form-control">
              <LockIcon id="iconInputLabelControl" />
              <input
                type="text"
                className="containerInputSenhaControl"
                placeholder="Cidade"
                id="cidade"
                value={user.cidade}
                onChange={(e) => setUser({ ...user, cidade: e.target.value })}
              />
              <label htmlFor="cidade"></label>
            </div>
          </div>
          <div id="containerButton">
            <input
              value="Cadastrar"
              type="submit"
              name="inputConfirmarSenha"
              className="button"
              onClick={validate}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ConteudoInputsCliente;
