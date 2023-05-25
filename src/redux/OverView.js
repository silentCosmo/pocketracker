const updateOverView = (history) => {

    const income = history.reduce((total, obj) => {
        if (obj.type === 'income') {
            return total + obj.amount;
        }
        return total
    }, 0)
    const expense = history.reduce((total, obj) => {
        if (obj.type === 'expense') {
            return total + obj.amount;
        }
        return total
    }, 0)
    const overview = { income: income, expense: expense, balance: 0 }
    return overview
}

export {updateOverView}