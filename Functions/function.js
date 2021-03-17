function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const alunos = [
    {nome: 'Leonardo',
     nota: 9.5
    },
    {nome: 'Jessica',
    nota: 8
   },
   {nome: 'Joselita',
   nota: 4
  }
]

turma1 = calculaMedia(alunos)

console.log(`${turma1}`)