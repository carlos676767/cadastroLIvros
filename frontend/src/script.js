const cadastrarLivros = async () => {
  try {
    const data = await fetch("http://localhost:3000");
    const response = await data.json();
    console.log(response);
  } catch (error) {
    console.log();
  }
};

cadastrarLivros();
