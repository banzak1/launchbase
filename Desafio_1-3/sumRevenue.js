const users = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

function calculaSaldo(users) {
    somaGastos(users.receitas, users.despesas)

    return saldo

}

function somaGastos(receitas, despesas) {
    var lucro = 0
    var gasto = 0
    var saldo = 0

        for(let i = 0; i < receitas.length; i++){
            lucro = lucro + receitas[i]
        }

        for(let j = 0; j < despesas.length; i++){
            gasto = gasto + despesas[i]
        }
    return saldo = lucro + gasto
}

for(i = 0; i <users.length; i++){
    const financa = calculaSaldo(users[i].receitas, users[i].despesas)
    if (financa > 0) {
        console.log(`${users[i].nome} possui saldo POSITIVO de ${financa}`)
    } else if (financa < 0) {
        console.log(`${users[i].nome} possui saldo NEGATIVO de ${financa}`)
       
    }
}