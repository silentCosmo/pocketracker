import { createSlice } from '@reduxjs/toolkit';
import { updateOverView } from './OverView';

const test = [{id: 1, type: 'expense', date: '2023-05-20', category: 'Dept', amount: 500},
    {id: 2, type: 'expense', date: '2023-05-20', category: 'Dept', amount: 500},
    {id: 3, type: 'income', date: '2023-05-11', category: 'Freelance', amount: 1000},
    {id: 4, type: 'income', date: '2023-05-11', category: 'Freelance', amount: 1000}, 
    {id: 5, type: 'income', date: '2023-05-11', category: 'Freelance', amount: 1000}
    ]
    console.log('DemoData:',test);

const initialState = {
    value:0,
    overview:null,
    history:[],
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
            state.overview = updateOverView(state.history)
            
        },
        onDelete: (state, action)=>{
            const ohistory = state.history
            const updatedHistory = ohistory.filter(obj => obj.id !== action.payload)
            state.history = updatedHistory
            //state.history = updatedHistory
            state.swiped = false
            //Update delete to History
            state.overview = updateOverView(updatedHistory)
        },
    },
})
// Action creators are generated for each case reducer function
export const { swiped, toSwipe, onDelete, history } = pocketSlice.actions

export default pocketSlice.reducer