import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name:"user",
    initialState:{name:"",email:""},
    reducers:{

userProfileDetail:(state,action)=>{


    state = action.payload
    return state
}


    }
})


export const {userProfileDetail} = userSlice.actions
export default userSlice.reducer