const puppeteer = require('puppeteer');
const { devices } = require('puppeteer');
const iPhonex = devices['iPhone X'];

const url = 'https://www.facebook.com/';

(async () => {
  const browser = await puppeteer.launch({
    headless:false
  });
  const page = await browser.newPage();
  await page.emulate(iPhonex)
  await page.goto(url);


  //await browser.close();
})();
