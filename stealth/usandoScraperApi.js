const puppeteer = require('puppeteer');
const proxyChain = require('proxy-chain'); // utiliza pq o puppeteer tem dificuldade de usar proxy
require('dotenv').config()

const token = process.env.TOKEN;

const url = 'https://meuip.com.br/';

(async () => {
  console.time('#acesso');
  const oldProxyUrl = `http://scraperapi:${token}@proxy-server.scraperapi.com:8001`
  const newProxyUrl = await proxyChain.anonymizeProxy(oldProxyUrl);

  console.log(newProxyUrl);

  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    args: [`--proxy-server=${newProxyUrl}`],
  });

  const page = await browser.newPage();

  console.log('Abrindo a pagina via proxy ...')

  // impedir que o timeout nao pare o programa
  await page.setDefaultNavigationTimeout(0);

  await page.goto(url);
  await page.screenshot({path: `${__dirname}/examplesacraperapi2.png`})





  await browser.close();
  await proxyChain.closeAnonymizedProxy(newProxyUrl, true);
  console.timeEnd('#acesso')
})();
