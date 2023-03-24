//Typescript
// tipagem, interface, type, generics
var nome = 'Antonio Podgorski';
var aluno = {
    nome: "Antonio",
    idade: 37,
    cpf: '1111111',
    sexo: "M",
    matricula: '123123123',
    altura: 120,
    endereco: {
        rua: "rua xpto",
        bairro: "uniconios",
        numero: "312"
    }
};
var IGF = {
    percentual: 2.3
};
var IGFD = {
    valor: 2.8
};
var GGPS = {
    percentual: 1,
    valor: 3.3
};
console.log(aluno);
//--------
function ordenaNumeros(estrutura) {
    return estrutura.sort();
}
function ordenaPalavras(estrutura) {
    return estrutura.sort();
}
function ordena(estrutura) {
    return estrutura.sort();
}
console.log(ordena([50, 12, 2, 33]));
console.log(ordena(['banana', 'amora', 'laranja', 'caqui']));
