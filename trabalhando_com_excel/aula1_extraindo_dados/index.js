const xlsx = require('xlsx');

// pegando dados do excel
const allArqExcel = xlsx.readFile(`${__dirname}/dados.xlsx`);
// console.log(allArqExcel);

// pegar nomes de planilhas
const sheetName = allArqExcel.SheetNames;
console.log(sheetName);


// pegando dados
const dadosBrutos = xlsx.utils.sheet_to_csv(allArqExcel.Sheets[sheetName[0]]);
// ele entrega no formado String
console.log(dadosBrutos);

// transformando em array
const dados = dadosBrutos.split('\n');
console.log(dados);

// fazendo leitura somente dos daods sem CPf
const dadosClean = dados.slice(1, dados.length);
console.log(dadosClean);
