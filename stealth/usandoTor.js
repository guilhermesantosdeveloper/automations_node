const puppeteer = require('puppeteer');





(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--proxy-server=socks5://127.0.0.1:9050'
    ],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);

  await page.goto('https://meuip.com.br/');

  await page.screenshot({
    path: `${__dirname}/meu-ip-tor.png`,
    fullPage: 'true'
  })



  await browser.close();
})();
