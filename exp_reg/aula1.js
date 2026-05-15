//g de global (encontra todas as ocorrências)
// i de insensitive

const { texto } = require('./base');

const regExp1 = /João/gi;

console.log(regExp1.text(texto));