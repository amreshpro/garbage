import {createSlice} from '@reduxjs/toolkit'


const authSlice = createSlice({
name:"authCheck",
initialState:false,
reducers:{

isAuth:(state,action)=>{
      state = action.payload
   
    return state

}
}

})



export const {isAuth}  = authSlice.actions
export default authSlice.reducer