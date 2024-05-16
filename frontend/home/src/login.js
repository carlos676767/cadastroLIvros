const enviarSenhaEemail = async () => {
  const usuario = document.getElementById("username");
  const senha = document.getElementById("password");

  const dadosCadastrados = {
    email: usuario.value,
    senha: senha.value,
  };

  try {
    const data = await fetch("", {
      method: "POST",
      body: JSON.stringify(dadosCadastrados),
    });
    const responseData = await data.json();
    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
  enviarSenhaEemail();
});
