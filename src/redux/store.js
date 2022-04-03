import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter' //since its a default export we can name it anything while importing it

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})