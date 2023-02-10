const puppeteer = require('puppeteer');

const url = 'https://www.w3schools.com/';

(async ()=> {
  const browser = await puppeteer.launch({
    // headless:false,
    // defaultViewport:null
  });
  const page = await browser.newPage();
  await page.goto(url);
  const options = await page.$$eval('.w3-col', options => options.map(option=>option.innerText)) // querySelectorAll eval - evaluate
  console.log(options);
  await browser.close();
})()
