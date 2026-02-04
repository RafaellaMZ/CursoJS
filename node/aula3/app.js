const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
  { nome: 'João' },
  { nome: 'Ana' },
  { nome: 'Eduardo' },
  { nome: 'Luiza' },
];

const json = JSON.stringify(pessoas, null, 2); // null em vez de '' fica mais semântico

async function main() {
  try {
    // 1) Espera escrever o arquivo
    await escreve(caminhoArquivo, json);

    // 2) Depois lê o arquivo
    const dados = await ler(caminhoArquivo);

    // 3) Renderiza os dados
    renderizaDados(dados);
  } catch (err) {
    console.error('Erro no fluxo principal:', err);
  }
}

function renderizaDados(dados) {
  const pessoas = JSON.parse(dados);
  pessoas.forEach((val) => console.log(val.nome));
}

// Executa
main();
