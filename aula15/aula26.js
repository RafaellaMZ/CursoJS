const pessoa = {
    nome: 'Rafaella',
    sobrenome: 'Macegosa',
    idade: 23,
    endereco: {
        rua: 'Av Brasil',
        numero: 420
    }
};

//Atribuição via desesrtuturação
const { endereco: {rua, numero}} = pessoa;
console.log(rua, numero);