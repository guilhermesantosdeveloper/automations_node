const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // pegando o tamanho default
    defaultViewport:null,
    //slowMo: 300
  })
  const page = await browser.newPage();
  // fazendo a pagina aumentar
  // await page.setViewport({
  //   width: 1920,
  //   height:1080
  // })
  await page.goto('https://www.google.com');
  await page.screenshot({ path: `${__dirname}/google-1920x1080.png` });
  await browser.close();
})()
