import React from "react"
import HomeLogin from "../Home/HomeLogin"
import FooterLogin from "../footer/FooterLogin"
import InputsLoginCuidador from "./input/InputsLoginCuidador"

const Login = () => {
  return (
    <div className="containerMainPet" id="containerMainPet" >
    <HomeLogin />
    <div id="containerInputsPet" className="containerInputsPet">
      <h1 className="titleLogin">Entre na sua conta, e cuide bem dos pets!</h1>
      <InputsLoginCuidador/>
     
    
      <FooterLogin />
    </div>
    </div>
  
  )
}

export default Login