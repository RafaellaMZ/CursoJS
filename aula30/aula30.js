// Factory function (Função Fábrica)
// Constructor function (Função Construtora)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //Getter
        get  nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre JS') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luis', 'Felipe', 1.8, 80);
const p2 = criaPessoa('Rafaella', 'Macegosa', 1.60, 53);
const p3 = criaPessoa('Lady', 'Ferreira', 1.50, 80);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);