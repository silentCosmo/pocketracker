import { configureStore } from '@reduxjs/toolkit'
import pocketReducer from './pocketSlice'

export const store = configureStore({
    reducer: {
        pocket: pocketReducer,
    },
})