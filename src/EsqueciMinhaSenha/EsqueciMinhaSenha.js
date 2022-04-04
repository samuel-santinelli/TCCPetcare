import React from "react"
import HomeEsqueciMinhaSenha from "../Cadastro/HomeEsqueciMinhaSenha"
import Footer from "../Cadastro/footer/Footer"
import InputsEsqueciMinhaSenha from "./inputs/InputsEsqueciMinhaSenha"

const EsqueciMinhaSenha = () => {
  return (
    <form class="containerMainPet" id="containerMainPet">
    <HomeEsqueciMinhaSenha />
    <div id="containerInputsPet" class="containerInputsPet">
      <h1>Esqueci Minha Senha</h1>
      <InputsEsqueciMinhaSenha/> 
    </div>
  </form>
  )
}

export default EsqueciMinhaSenha;