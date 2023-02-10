const puppeteer = require('puppeteer');
const url = 'https://www.amazon.com/';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const htmlPuro = await page.content();
  console.log(htmlPuro);



  await browser.close();
})();
