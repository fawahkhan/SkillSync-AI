import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/authSlice.js'

// here we will manage the gglobal state and functions


export const store = configureStore({
    reducer : { // here we will add all the reducers that we create for this project
        auth: authReducer  // this will manage our authentication using redux state maagement
    }
})