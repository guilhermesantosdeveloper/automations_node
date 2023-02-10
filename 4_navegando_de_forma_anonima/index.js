const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  })
  // navegando de forma anonima
  const contex = await browser.createIncognitoBrowserContext();
  const page = await contex.newPage();
  await page.goto('https://www.google.com');
  await page.screenshot({ path: `${__dirname}/google-1920x1080.png` });
  await browser.close();
})()
