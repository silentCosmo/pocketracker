import { createSlice } from '@reduxjs/toolkit';
import { updateOverView } from './OverView';
import { db } from '../database/LocalDatabase';

const test = [
    {id: 1, type: 'expense', date: '2023-05-20', category: 'Dept', amount: 500},
    {id: 2, type: 'expense', date: '2023-05-20', category: 'Food', amount: 500},
    {id: 3, type: 'income', date: '2023-05-11', category: 'Freelance', amount: 1000},
    {id: 5, type: 'income', date: '2023-05-11', category: 'Freelance', amount: 1000},
    {id: 4, type: 'income', date: '2023-05-11', category: 'Investment', amount: 1000}
    ]
    console.log('DemoData:',test);

const localHistory = db.get('history')?db.get('history'):[]
//const localOverview = updateOverView(localHistory)

const initialState = {
    value:0,
    overview:null,
    history:[...localHistory],
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
            //Statistics
            state.overview = updateOverView(state.history)
            //Update to localStorage
            db.update(state.history)
        },
        onDelete: (state, action)=>{
            const ohistory = state.history
            const updatedHistory = ohistory.filter(obj => obj.id !== action.payload)
            state.history = updatedHistory
            //state.history = updatedHistory
            state.swiped = false
            //Update delete to History
            state.overview = updateOverView(updatedHistory)
            //Update to localStorage
            db.update(updatedHistory)
        }, 
    },
})
// Action creators are generated for each case reducer function
export const { swiped, toSwipe, onDelete, history } = pocketSlice.actions

export default pocketSlice.reducer