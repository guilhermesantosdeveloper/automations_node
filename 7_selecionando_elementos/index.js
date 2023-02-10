const puppeteer = require('puppeteer');

const url = 'https://www.google.com';

(async ()=> {
  const browser = await puppeteer.launch({
    headless:false,
    defaultViewport:null
  });
  const page = await browser.newPage();
  await page.goto(url);
  const texto = await page.$('.L3eUgb'); // document.querySelector
  const html = await page.evaluate(body => body.innerText, texto); // evaluate executa a funcao dentro do navegador
  console.log(html);
  await browser.close();
})()
