import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/userSlise'

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})