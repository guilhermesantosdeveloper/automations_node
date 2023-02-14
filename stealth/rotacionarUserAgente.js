const puppeteer = require('puppeteer');
const randomUseragent = require('random-useragent');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setUserAgent(randomUseragent.getRandom());
  await page.goto(url);
  await page.waitForTimeout(1000);




  await browser.close();
})();
