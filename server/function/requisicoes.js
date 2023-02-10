const { getConnection } = require("../database");

const requisicoes = async (app, pup) => {
  app.post("/BuscaInfos", async function (req, res) {
    const url = `https://rstransitarios.com.br/`;

  const browser = await pup.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);

  let OrigemElemento = await page.$(
    ".carousel-container p"
  );
  let text = await page.evaluate((el) => el.textContent, OrigemElemento);
  res.send(text)
  await browser.close();
  });

  app.post("/InsereBanco", async function (req, res) {
    let conn = await getConnection();
    const resultado = await conn.query(
      `INSERT INTO teste SET ?`, req.body
    );
    res.send(resultado);
    conn.end();
  });
  
}

module.exports = {
  requisicoes
}