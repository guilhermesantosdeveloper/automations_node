const puppeteer = require('puppeteer');
const waitForTimeout = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null

  });
  const page = await browser.newPage();

  await page.goto('https://www.google.com')
  // esperar o elemento aparacer
  await page.waitForXPath('//*[@id="input"]');
  // escvrever no elemento nodejs
  await page.type('//*[@id="input"]', 'nodejs');
  // esperar 1000 ms para fazer a proxima acao
  await page.waitForTimeout(1000);
  await page.keyboard.press('ArrowDown', {delay:450});

  await browser.close();
})();
