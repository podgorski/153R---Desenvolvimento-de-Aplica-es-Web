// ES6
// DESESTRUTURAÇÃO
// TEMPLATE LITERALS
// ARROW FUNCTION
// METODOS DE ARRAY(map)
// TypeScript
// Generics

// // let nome = "Antonio"
// // let idade = 37

// // console.log(nome, idade)

// //JSON

// let pessoa = {
//     nome: 'Antonio',
//     idade: 37,
//     sobrenome: 'Podgorski Bezerra',
//     cpf: '11111111'
// }

// let pessoa_ = { ...pessoa, idade: 'trinta e sete' }

// console.log(pessoa_)

// // "O email do professor Antonio é abezerra@unicarioca.edu.br"
// // let email = pessoa.nome.substring(0, 1).toLowerCase() + pessoa.sobrenome.split(" ")[1].toLowerCase() + "@unicarioca.edu.br"

// // console.log("O email do professor " + pessoa.nome + " é " + email)

// let { nome, sobrenome, ...resto } = pessoa

// console.log(nome, sobrenome, resto)

// let arr = ['banana', 'maca', 'uva', 'pera', 'laranja']

// let [primeiro, segundo, ...outros] = arr

// console.log(primeiro, segundo, outros)

// this.nome = "Gustavo"



// function teste() {
//     console.log(this)
//     return 'ola'
// }

// let that = this
// function teste() {
//     console.log(that)
//     return 'ola'
// }


// function teste() {
//     console.log(this)
//     return 'ola'
// }


// console.log(teste.bind(this)())


// let teste = () => {
//     console.log(this)
//     return 'ola'
// }

// console.log(teste())

// let soma = (a, b) => a + b


// console.log(soma(10, 5))


alunos = [{
    nome: 'antonio',
    idade: 37,
    filhos: true
}, {
    nome: 'gabriel',
    idade: 26,
    filhos: true
}, {
    nome: 'ana',
    idade: 30,
    filhos: false
}]



// alunos_render = alunos.map(function (aluno) {
//     let aux
//     if (aluno.filhos == true) {
//         aux = 'tem filhos'
//     } else {
//         aux = 'nao tem filhos'
//     }

//     return {
//         nome: aluno.nome,
//         idade: aluno.idade,
//         filhos: aux
//     }
// })

// alunos_render = alunos.map((aluno) =>
//     ({ ...aluno, filhos: aluno.filhos ? 'tem filhos' : 'nao tem filhos' }))


// console.log(alunos_render)


