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

function calculaSaldo(receitas, despesas) {
    var lucro = somaReceitas(receitas)
    var gasto = somaDespesas(despesas)
    var saldo = lucro + gasto

    return saldo

}

function somaReceitas(receitas) {
    var lucro = 0

    for(let i = 0; i < receitas.length; i++){
        lucro = lucro + receitas[i]
    }  
    return lucro
}

function somaDespesas(despesas) {
    var gasto = 0

    for(let j = 0; j < despesas.length; i++){
        gasto = gasto + despesas[i]
    }
    return gasto
}

for(i = 0; i <users.length; i++){
    var receitas = users[i].receitas
    var despesas = users[i].despesas

    const financa = calculaSaldo(receitas, despesas)
    if (financa > 0) {
        console.log(`${users[i].nome} possui saldo POSITIVO de ${financa}`)
    } else if (financa < 0) {
        console.log(`${users[i].nome} possui saldo NEGATIVO de ${financa}`)
       
    }
}