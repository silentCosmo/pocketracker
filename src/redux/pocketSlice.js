import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0,
    history:[],
}

export const pocketSlice = createSlice({
    name: 'pocket',
    initialState,
    reducers: {
        /* increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        } */
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
        },
    },
})

// Action creators are generated for each case reducer function
export const { swiped, toSwipe, history } = pocketSlice.actions

export default pocketSlice.reducer