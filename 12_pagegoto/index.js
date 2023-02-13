// fazendo pdf
const puppeteer = require('puppeteer');

const url = 'https://pptr.dev/api/puppeteer.page.goto';

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport:null,
    devtools:false,
  });
  const page = await browser.newPage();
  // com networkdle0 podemos pedir para que ele espere o elemento seja carregado 
  await page.goto(url, {waitUntil:'networkidle0'});
  await page.pdf({path: `${__dirname}/pdfnormal.pdf`, format:'A4'});



  await browser.close();
})();
