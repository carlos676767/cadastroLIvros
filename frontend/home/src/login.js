const usuario = document.getElementById("username");
const senha = document.getElementById("password");

const validacoesFrontEnd = () => {
  if (valorVazio(senha.value, usuario.value)) {
   return
  } else {
    enviarLogin();
  }
};

const enviarLogin = async () => {
  const dadosCadastrados = {
    email: usuario.value,
    senha: senha.value,
  };
  try {
    const data = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(dadosCadastrados),
    });
    const responseData = await data.json();
    console.log(responseData);
  } catch (error) {
    console.log(error);
  } finally {
    limparInput(usuario, senha);
  }
};

const limparInput = (email, senha) => {
  email.value = "";
  senha.value = "";
};

const valorVazio = (email, senha) => {
  return email.trim() === "" && senha.trim() === "";
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
  validacoesFrontEnd();
});
