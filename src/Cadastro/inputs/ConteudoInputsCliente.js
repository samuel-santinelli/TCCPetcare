import {useState} from "react";
import axios from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import "../style/CadastroCliente.css";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import InputCamera from "./InputCamera";

const InputsIconCliente = () => {
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
        // qualquer classe p/ efeito de hover aqui
      },
      "&.Mui-focused fieldset": {
        borderColor: "f28907",
        // qualquer classe p/ efeito de focus aqui
      },
    },
  });

  const [user, setUser] = useState({})

  const handleUserSubmit = (user) => {
    const url = ("http://localhost/Cuidador/Cliente/api/cliente", user);
    axios
    .post(url)
    .then((res) => { console.log(res.data);
    })
  
  }

  return (
    <>
    <form onSubmit={() => handleUserSubmit(user)}>
    <InputCamera/>
      <div id="contInputsPet">
        <Input
          label="Nome"
          id="nome"
          onChange={(e) => setUser({...user, name: e.target.value})}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
          <input type="date" class="inputCalendar"/>
      </div>
      <div id="contInputStretch">
        <Input
          label="Email"
          id="email"
          onChange={(e) => setUser({...user, email: e.target.value})}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div id="contInputsPet">
        <Input
          label="Senha"
          id="senha"
          onChange={(e) => setUser({...user, senha: e.target.value})}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
        <Input
          label="Confirmar Senha"
          id="confirmarSenha"
          onChange={(e) => setUser({...user, confirmarSenha: e.target.value})}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div id="contInputsPet">
        <Input
          label="Moradia"
          id="moradia"
          onChange={(e) => setUser({...user, moradia: e.target.value})}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
        <Input
          label="Telefone"
          id="telefone"
          onChange={(e) => setUser({...user, telefone: e.target.value})}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CallIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div id="contInputsPet">
        <Input
          label="CPF"
          id="cpf"
          onChange={(e) => setUser({...user, cpf: e.target.value})}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AssignmentIndIcon id="iconInputLabel" />
              </InputAdornment>
            ),
          }}
        />
           <select id="InputsContainerSelectCliente">
          <option disabled selected>
            Selecione um genêro
          </option>
          <option>Masculino</option>
          <option>Femininio</option>
          <option>Não Binario</option>
        </select>
      </div>
      <div id="containerButton">
      <input
        value="Cadastrar"
        type="submit"
        name="inputConfirmarSenha"
        id="buttonCadastrar"
        class="button"
      />
    </div>
      </form>
    </>
  );
};

export default InputsIconCliente;
