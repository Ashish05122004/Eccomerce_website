import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/CartSlice";
import LoginSlice from "./slice/LoginSlice";


export const store = configureStore({
    reducer:{
        cart:CartSlice,
        login:LoginSlice
    }
});