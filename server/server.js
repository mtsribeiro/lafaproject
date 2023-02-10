// Importar a biblioteca Express
const express = require("express");

// Importar a biblioteca HTTP do Node.js
const http = require("http");

// Instanciar a aplicação Express
const app = express();

// Importar a biblioteca Path do Node.js
const path = require("path");

// Criar um servidor HTTP usando a instância da aplicação Express
const server = http.createServer(app);

// Importar a biblioteca Puppeteer
const pup = require("puppeteer");

// Importar a função requisicoes a partir do arquivo function/requisicoes
const { requisicoes } = require("./function/requisicoes");

// Definir a porta 9000 para o servidor
const port = 9000;

// Configurar o Express para usar o middleware que permite o envio de dados codificados em URL
app.use(express.urlencoded({ extended: true }));

// Configurar o Express para usar o middleware que permite o envio de dados no formato JSON
app.use(express.json());

// Configurar o Express para servir arquivos estáticos a partir da pasta public
app.use("/", express.static(path.join(__dirname, "../public")));

// Configurar a rota raiz da aplicação para enviar o arquivo index.html da pasta public
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Chamando a função requisições da pasta /function/requisicoes.js
requisicoes(app, pup);

// Iniciar o servidor na porta 9000
server.listen(port, () => {
  // Imprimir mensagem no console ao iniciar o servidor
  console.log(`Servidor iniciado, link: http://localhost:${port}`);
});
