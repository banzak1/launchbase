const user = {
        name: 'Leonardo',
        transactions: [],
        balance: 0
}


function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType(type) {
    var higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type === type && transaction.value > higherValue){
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
    return  console.log(higherTransaction)
}

function showHigherTransaction(type) {
    getHigherTransactionByType(type)
}

function getAverageTransactionValue() {
    let transactionValue = 0
    let averageTransactionValue
    let transaction = user.transactions

    for (let transtion of user.transactions) {
        transactionValue = transactionValue + transtion.value
    }
    averageTransactionValue = transactionValue / transaction.length

    return console.log(averageTransactionValue)
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)

showHigherTransaction('credit')
showHigherTransaction('debit')

getAverageTransactionValue()