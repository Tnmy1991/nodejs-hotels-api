const http = require("http");
const helmet = require("helmet");
const express = require("express");
const port = process.env.PORT || 3000;
const logger = require("morgan");

const app = express();
app.set("view engine", "html");
app.set("port", port);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

const routers = require("./routes");

app.use("/api", routers);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`🚀  Server ready at http://localhost:${port}/`);
});

module.exports = server;
