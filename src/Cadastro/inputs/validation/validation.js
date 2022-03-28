function validationSenha() {
  const senha = document.getElementById("#senha");
  if (senha.type === "password") {
    senha.type = "text";
  }
}

export default validationSenha();
