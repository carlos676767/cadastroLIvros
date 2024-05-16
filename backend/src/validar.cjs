const fastify = require("fastify")({ logger: true });

const dadosRecebidosFrontEnd = [];
fastify.get("/login", function handler(request, resposta) {
  resposta.send({ hello: "seuse dados de email e senha foram enviados com sucesso." });
  dadosRecebidosFrontEnd.push(request.body);
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
