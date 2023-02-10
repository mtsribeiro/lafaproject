const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);
const pup = require("puppeteer");
const { requisicoes } = require("./function/requisicoes");

const port = 9000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

requisicoes(app, pup);

server.listen(port, () => {
  console.log(`Servidor iniciado, link: http://localhost:${port}`);
});