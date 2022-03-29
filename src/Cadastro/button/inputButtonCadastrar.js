import "./style/ButtonStyle.css";

function InputButtonCadastrar() {
  return (
    <div id="containerButton">
      <input
        value="Cadastrar"
        type="submit"
        name="inputConfirmarSenha"
        id="buttonCadastrar"
        className="button"
      />
    </div>
  );
}

export default InputButtonCadastrar;
