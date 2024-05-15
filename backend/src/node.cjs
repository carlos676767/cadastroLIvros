const fastify = require("fastify")({ logger: true });

const array = []
fastify.get("/", function handler(request, resposta) {
  resposta.send({ hello: "este e um dado do back end fds" });
  console.log(request.body);
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
