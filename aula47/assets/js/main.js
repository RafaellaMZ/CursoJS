fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementosNaPagina(json))

//axios('pessoas.json')
//  .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');

    for(let pessoa of json) {
        const table = document.createElement('tr');

        let td1 = document.createElement('td');
            td1.innerHTML = pessoa.nome;
            tr.appendChild(td2);

            table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}