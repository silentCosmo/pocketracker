import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0,
    history:[],
    overview:98,
}

export const pocketSlice = createSlice({
    name: 'pocket',
    initialState,
    reducers: {
        swiped: (state, action)=>{
            state.swiped = action.payload
        },
        toSwipe: (state, action)=>{
            state.toswipe = action.payload
        },
        history:(state, action)=>{
            //Generate NewID
            const newId = state.history.length + 1 
            const newItem = {id:newId,...action.payload}
            //Update History
            state.history = [...state.history,newItem]
            console.log('redux', state.history)
            //Statistics
            const history = state.history
            const incomeTotal = history.reduce((total,obj)=>{
                if(obj.type==='income'){
                return total + obj.amount;
            }
                return total
            }, 0)
            state.overview = { income: incomeTotal, expense: 0, balance: 0 }
            console.log( "over", state.overview);
        },
        statistics: (state, action)=>{
            
        }
    },
})

// Action creators are generated for each case reducer function
export const { swiped, toSwipe, statistics, history } = pocketSlice.actions

export default pocketSlice.reducer