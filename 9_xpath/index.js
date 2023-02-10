const puppeteer = require('puppeteer');
// $x('//*[@id="main"]/div[6]/div') xpath exemplo
const url = 'https://www.mercadolivre.com.br/';

(async () => {
  const browser = await puppeteer.launch({
    headless:false,
    defaultViewport: null
  });
  const page = await browser.newPage();
  await page.goto(url);
  // eperando um objeto aparecer
  await page.waitForXPath('//*[@id="cb1-edit"]');
  const consulta = await page.$x('//*[@id="cb1-edit"]');
  // inserindo para pesquisar
  await consulta[0].type('tv smart');
  // apertando enter
  await page.keyboard.press('Enter');

  // extrair texto do primeiro item
  await page.waitForXPath('//*[@id="root-app"]/div/ol[1]/li[1]/div/div/div/a/div/div[2]/div/div/span[1]/span[2]/span[2]');
  const titulo = await page.$x('//*[@id="root-app"]/div/ol[1]/li[1]/div/div/div/a/div/div[2]/div/div/span[1]/span[2]/span[2]');
  let preco = await page.evaluate(tx => tx.textContent, titulo[0]);
  console.log(preco);

  await browser.close();


})();


