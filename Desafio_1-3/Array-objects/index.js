//Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
//Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.


const programador01 = {
    nome: "Mayk Brito",
    idade: 28,
    tecnologias: [
        {nome: 'JavaScript', especialidade: 'Web'},
        {nome: 'CSS', especialidade: 'Web'}
    ]
}

console.log(`O programador ${programador01.nome} tem ${programador01.idade} anos e usa a tecnologia ${programador01.tecnologias[0].nome} com especialidade em ${programador01.tecnologias[0].especialidade}`)

const programador02 = {
    nome: "Banzak",
    idade: 23,
    tecnologias: [
        {nome: "JavaScript", especialidade: "Web"},
        {nome: "Python", especialidade: "Machine Learning"}
    ]
}

console.log(`O programador ${programador02.nome} tem ${programador02.idade} e usa a tecnologia ${programador02.tecnologias[1].nome} com especialidade em ${programador02.tecnologias[1].especialidade} `)