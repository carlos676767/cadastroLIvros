const fastify = require("fastify")({ logger: true });

const dadosLivros = [];
fastify.get("/livros", function handler(request, resposta) {
  resposta.send({ hello: "Dados enviados com sucesso." });
  dadosLivros.push(request.body);
});

fastify.listen({ port: 4000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});