const { Cluster } = require('puppeteer-cluster');

(async () => {

  const cluster = await Cluster.launch({
    // ele nao vai compartilhar informocoes
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    // quantas instancia irei utilizar
    maxConcurrency: 1,
    // mostra quanto ele ta consumindo
    monitor: true,
  });

  // criando tarefa para o cluster
  await cluster.task(async({page, data:url})=> {
    await page.goto(url);
    const countUrls = await page.$$eval('a[href]', urls => urls.length);
    console.log(`O site ${url} tem ${countUrls} URLS`)
  });

  // sites que vao executar a task
  cluster.queue('https://www.wikipedia.org/');
  cluster.queue('https://github.com/thomasdondorf/puppeteer-cluster');


  // fechando cluster
  await cluster.idle();
  await cluster.close();

})();
