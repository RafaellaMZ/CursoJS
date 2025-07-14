// Try, catch,, finally

try{
    //Executada quando não há erros 
} catch (e) {
    // É executada quando há erros
} finally {
    // Ele é executado sempre, porém caso você precise, pode omitir ele
}


function retornaHora(data) {
    if (data &&!(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
const data =  new Date('01-01-1970 12:58:12')
const hora = retornaHora();
console.log(hora);
} catch(e) {
    console.log('Deu erro aqui');
}finally {
    console.log('Tenha um bom dia!');
}