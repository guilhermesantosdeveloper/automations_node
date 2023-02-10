// fazendo o pupperter enetra em um site e tirar uma screenshot
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    //headless: false
  })
  const page = await browser.newPage();
  await page.goto('https://stackoverflow.com/questions/68507849/eslint-uninstall');
  await page.screenshot({ path: 'google.png' });
  await browser.close();
})()
