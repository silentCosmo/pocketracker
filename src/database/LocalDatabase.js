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
    delete:() => {
        // COMMING Soon
    }
    
}
