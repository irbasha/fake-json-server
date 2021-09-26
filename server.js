const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000; // <== You can change the port

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*/_search?*=:searchstring": "/$1/?$2_like=:searchstring",
    "/api/*": "/$1",
  })
);

server.use(router);

server.listen(port);
