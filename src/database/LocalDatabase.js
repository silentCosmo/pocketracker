export const db = {

    update: (data) => {
        console.log('LocalDB:', data);
        localStorage.setItem('history',JSON.stringify(data))
        const localData = JSON.parse(localStorage.getItem('history'))
        console.log(localData,'lo');
    },
    get: (key) => {
        return JSON.parse(localStorage.getItem(key))
    },
    archive: (month) => {
        //Get the datas
       const monthly = JSON.parse(localStorage.getItem('history'))
       const yearly = JSON.parse(localStorage.getItem('YearlyHistory'))
       //Archive current month data to earlyHistory
       localStorage.removeItem('YearlyHistory')
       const data = {...yearly,[month]:monthly,}
       localStorage.setItem('YearlyHistory',JSON.stringify(data))
    },
    reset: () => {
        localStorage.setItem('history',JSON.stringify([]))
    },
    delete:() => {
        // COMMING Soon
    }
    
}
