//Typescript
// tipagem, interface, type, generics

let nome: string = 'Antonio Podgorski'

interface Endereco {
    rua: string,
    bairro: string,
    numero: string,
    complemento?: string
}

interface Pessoa {
    nome: string,
    idade: number,
    cpf: string,
    sexo: 'M' | 'F',
    endereco: Endereco
}

interface Pessoa {
    altura: number
}

interface Aluno extends Pessoa {
    matricula: string
}

let aluno: Aluno = {
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
}


type ImpostoUm = {
    percentual: number
}


type ImpostoDois = {
    valor: number
}

type Tributo = ImpostoUm & ImpostoDois


let IGF: ImpostoUm = {
    percentual: 2.3
}

let IGFD: ImpostoDois = {
    valor: 2.8
}

let GGPS: Tributo = {
    percentual: 1,
    valor: 3.3
}

console.log(aluno)

//--------

function ordenaNumeros(estrutura: number[]): number[] {
    return estrutura.sort()
}

function ordenaPalavras(estrutura: string[]): string[] {
    return estrutura.sort()
}


function ordena<T>(estrutura: T[]): T[] {
    return estrutura.sort()
}


console.log(ordena([50, 12, 2, 33]))
console.log(ordena(['banana', 'amora', 'laranja', 'caqui']))