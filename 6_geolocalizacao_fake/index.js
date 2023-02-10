const puppeteer = require('puppeteer');

const url = 'https://www.airbnb.com';

(async ()=> {
  const browser = await puppeteer.launch({
    headless:false,
    defaultViewport:null,

  });
  const page = await browser.newPage();
  const context = browser.defaultBrowserContext();
  await context.overridePermissions(url,['geolocation']);
  await page.setGeolocation({
    latitude: 25.7751,
    longitude: -80.2105
  })
  await page.goto(url);

})()
