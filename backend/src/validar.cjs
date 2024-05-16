const fastify = require("fastify")({ logger: true });

const dadosRecebidosFrontEnd = [];
fastify.post("/login", function handler(request, resposta) {
  resposta.send({
    sucesso: "seuse dados de email e senha foram enviados com sucesso.",
    status: "ok",
  });
  dadosRecebidosFrontEnd.push(request.body);
  console.log(dadosRecebidosFrontEnd);
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
