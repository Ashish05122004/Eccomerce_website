import { createSlice } from "@reduxjs/toolkit";


export const LoginSlice = createSlice({
    name:"login",
    initialState:false,
    reducers:{
        toggleLogin:(state)=>{
            return !state;
        }
    }
})
export const {toggleLogin} = LoginSlice.actions;
export default LoginSlice.reducer;
