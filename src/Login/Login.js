import React from "react"
import HomeLogin from "../Home/HomeLogin"
import FooterLogin from "../footer/FooterLogin"
import InputsLogin from "./input/InputsLogin"

const Login = () => {
  return (
    <div className="containerMainPet" id="containerMainPet" >
    <HomeLogin />
    <div id="containerInputsPet" className="containerInputsPet">
      <h1 className="titleLogin">Entre na sua conta, venha conosco!</h1>
      <InputsLogin/>
     
    
      <FooterLogin />
    </div>
    </div>
  
  )
}

export default Login