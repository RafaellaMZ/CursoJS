function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luis');
console.log(variavel)

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(5, 10);
console.log(resultado)

const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(9));

// Arrow function
const raiz2 = n => n ** 0.5;
console.log(raiz(25));