import { createSlice } from "@reduxjs/toolkit";


const darkModeSlice = createSlice({
name:"darkMode",
initialState:false,
reducers:{
    isDarkModeEnabled:(state)=>{

return  state =  state ? false :true
        
    }
}

})

export default darkModeSlice.reducer
export const {isDarkModeEnabled} = darkModeSlice.actions