import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import "../style/CadastroCliente.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InputMask from "react-input-mask";

const ConteudoInputsCliente = (props) => {
  const navigate = useNavigate();

  // const nome = document.getElementById("nome");
  // const dataNascimento = document.getElementById("dataNascimento");
  // const email = document.getElementById("email");
  const senha = document.getElementById("senhaClient");
  const confirmarSenha = document.getElementById("confirmarSenhaControl");

  const imgRef = useRef();

  const [imagem, setImagem] = useState(null);

  const handleImageClienteSubmit = (e) => {
    if (e.target.files[0]) {
     const imagem = imgRef.current.src = URL.createObjectURL(e.target.files[0]);
      window.localStorage.setItem("imageCliente", imagem);
    }
    setImagem(e.target.files[0]);
    console.log("A imagem é", imagem);
  };
  console.log(imgRef.current);

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
  });

  // Function para validar se ele está preenchido
  function receivedAgendamento(e) {
    if (user.process === "PROCESSAMENTO") {
      e.preventDefault();
    } else {
      if (user.process === "ACEITO") {
        return true;
      } else {
        return false;
      }
    }
  }

  console.log(user);

  const handleUserSubmit = (user) => {
    if (
      user.nome === "" ||
      user.cpf === "" ||
      user.dataNascimento === "" ||
      user.email === "" ||
      user.senha === "" ||
      user.telefone === "" ||
      user.idSexo === "" ||
      // user.cep === "" ||
      // user.endereco === "" ||
      // user.bairro === "" ||
      // user.cidade === "" ||
      user.numero === ""
    ) {
      alert("Preencha todos os campos");

      return false;
    } else {
      axios
        .post("http://localhost/Cuidador/Cliente/api/cliente", user)
        .then((res) => setUser(res.data));
      navigate("/Login");
      if (user) {
        alert("Cadastro efetuado com sucesso!");
      } else {
        alert("Deu algum erro!!!");
      }
    }
  };

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

  const { register, setValue } = useForm();

  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log("o cep é", cep);
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
      <form onSubmit={() => handleUserSubmit(user)}>
        <div className="containerMainInputsCliente">
          <div id="containerInput">
            <div id="containerBorderImage">
              <img className="imgPreview" alt="" ref={imgRef} />
              <input
                type="file"
                name="inputImage"
                className="inputImage"
                accept="image/jpeg, image/jpg, image/png"
                id="foto"
                onChange={handleImageClienteSubmit}
                value={user.foto}
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
                placeholder="Numero"
                id="numero"
                value={user.numero}
                onChange={(e) => setUser({ ...user, numero: e.target.value })}
              />
              <label htmlFor="numero"></label>
            </div>
            <div className="form-control">
              <LockOpenIcon id="iconInputLabelControl" />
              <input
                type="text"
                className="containerInputSenhaControl"
                placeholder="Cep"
                id="cep"
                {...register("cep")}
                onBlur={checkCep}
                onChange={(e) => setUser({ ...user, cep: e.target.value })}
              />
            </div>
          </div>
          <div id="contInputsControl">
            <div className="form-control">
              <LockIcon id="iconInputLabelControl" />
              <input
                type="text"
                className="containerInputSenhaControl"
                placeholder="Cidade"
                id="cidade"
                {...register("city")}
                value={user.cidade}
                onChange={(e) => setUser({ ...user, cidade: e.target.value })}
              />
            </div>

            <div className="form-control">
              <LockIcon id="iconInputLabelControl" />
              <input
                type="text"
                className="containerInputSenhaControl"
                placeholder="Bairro"
                id="bairro"
                value={user.bairro}
                {...register("neighborhood")}
                onChange={(e) => setUser({ ...user, bairro: e.target.value })}
              />
            </div>
          </div>
          <div id="contInputsControl">
            <div className="form-control">
              <LockOpenIcon id="iconInputLabelControl" />
              <input
                type="text"
                className="containerInputEnderecoControl"
                placeholder="Rua / Avenida"
                id="endereco"
                value={user.endereco}
                {...register("address")}
                onChange={(e) => setUser({ ...user, endereco: e.target.value })}
              />
            </div>
          </div>
          <div id="containerButton">
            <input
              value="Cadastrar"
              type="submit"
              name="inputConfirmarSenha"
              className="button"
              id="buttonCadastrarCliente"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ConteudoInputsCliente;
