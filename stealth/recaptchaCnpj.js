const puppeteer = require('puppeteer-extra');
const recaptchaPlugin = require('puppeteer-extra-plugin-stealth');
require('dotenv').config();


const idUsername = process.env.IDUSERNAME;
const token = process.env.TOKEN;


const sitealvo = '';
const cpnj = '';

puppeteer.use(
  recaptchaPlugin({
    provider: {
      id: idUsername,
      token: token,
    },
    visualFeedback:true
  })
)

puppeteer.launch({
  headlees:false,
  // usar chrome local para dificultar se é bot ou nao
  executablePath: '/opt/google/chrome/chrome',
  ignoreHTTPSErrors:true
}).then( async browser => {
  const page = await browser.newPage()
  await page.goto(sitealvo)

  await page.waitForSelector('input[name="cnpj"]');
  await page.type('input[name="cnpj"]', cpnj, {delay: 185});

  await page.solveRecaptchas()

  await Promise.all([
    page.waitForNavigation(),
    page.click('.btn-primary')
  ])

  await page.screenshot({ path: `${__dirname}/resultadocnpj-${cpnj}.png`, fullPage:true})
  await browser.close()

})

