const puppeteer = require('puppeteer');

const url = 'https://pptr.dev/api/puppeteer.pdfoptions';


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);
  await page.pdf({
    path: `${__dirname}/pdfnormal.pdf`,
    displayHeaderFooter: true,
    footerTemplate: `<p style="color:red; font-size:16px;">Gerado por Guilherme Lindo</p>`,
    format: 'A4',
    margin: {
      bottom: 70,
      left: 25,
      right: 35,
      top: 30,
    },
    pageRanges: '1-2',
    printBackground: true,
  })

  await browser.close();
})();
