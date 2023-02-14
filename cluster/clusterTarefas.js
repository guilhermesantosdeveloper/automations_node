const { Cluster } = require('puppeteer-cluster');


const urlalvo ='http://127.0.0.1:5500/secao_3/25_exercicio_lista_tarefas/lista-tarefas/index.html'

const dados = [
  '',
  'Fazer café',
  'Ir para farmacia',
  'Comprar pão',
  '',
  'Comprar doce'
];

(async () => {

  const cluster = await Cluster.launch({
    // ele nao vai compartilhar informocoes
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    // quantas instancia irei utilizar
    maxConcurrency: 2,
    // mostra quanto ele ta consumindo
    // monitor: true,
    // para adicionar opçoes no puppeteer
    puppeteerOptions: {
      headless: false,
      slowMo: 250,
    }



  });
  // para visualizar os erros que aparecem no cluster
  cluster.on('taskerror', (err, data)=> {
    console.log(`Èrro de ${data}: ${err.message}`);
  })

  const addData = async({page, data: nrtarefa}) => {
    await page.goto(urlalvo);
    await page.waitForSelector('.input-tarefa');
    await page.type('.input-tarefa', nrtarefa);
    await page.keyboard.press('Enter');
    console.log(`Dado => ${nrtarefa} adicionado!`)
  }


  for (let i = 0; i < dados.length; i++) {
    const tarefa = dados[i];
    cluster.queue([tarefa], addData);
    //cluster.execute(tarefa,addData)

  }





  // fechando cluster
  await cluster.idle();
  await cluster.close();

})();
