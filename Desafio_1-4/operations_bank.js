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
