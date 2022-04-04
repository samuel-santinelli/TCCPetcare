import React from "react"
import HomeLogin from "../Cadastro/HomeLogin"
import FooterLogin from "../Cadastro/footer/FooterLogin"
import InputsLogin from "./input/InputsLogin"

const Login = () => {
  return (
    <form class="containerMainPet" id="containerMainPet">
    <HomeLogin />
    <div id="containerInputsPet" class="containerInputsPet">
      <h1>Entre na sua conta, venha conosco!</h1>
      <InputsLogin/>
     
    
      <FooterLogin />
    </div>
  </form>
  )
}

export default Login