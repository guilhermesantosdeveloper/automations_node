const puppeteer = require('puppeteer');

const url = 'https://www.google.com';

(async ()=> {
  const browser = await puppeteer.launch({
    headless:false,
    executablePath:'/opt/google/chrome/chrome',
  });
  const page = await browser.newPage();
  await page.goto(url);
  await browser.close();
})()
