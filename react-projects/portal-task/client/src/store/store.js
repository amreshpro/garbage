import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice.js'
import darkModeReducer from './darkModeSlice.js'
import userSlice from './userSlice.js'

export const store  = configureStore({
reducer:{
   auth:authReducer ,
   darkMode:darkModeReducer,
   userProfileDetail : userSlice
}



})