import "./style/FooterStyle.css";

function FooterLogin() {
  return (
    <>
      <div className="containerCheckBox">
      <label className="labelInputCheckbox">
          Lembre-se de mim
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label>Esqueci minha senha</label>
      </div>
      <div id="containerLink">
        <a href="">Já tem uma conta?</a>
        <a className="linkEntreAgora">Entre agora</a>
      </div>
    </>
  );
}

export default FooterLogin;