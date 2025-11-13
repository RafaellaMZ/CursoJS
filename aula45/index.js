class Pessoas {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }
}

function Pessoas2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoas2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
};

const p1 = new Pessoas('Rafaella', 'Macegosa');
const p2 = new Pessoas2('Mikaella', 'Martinez');