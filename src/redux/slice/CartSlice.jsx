import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            // state.push(action.payload); //action.payload-> input of the function
            const isProductExist = state.find((item) => item.id === action.payload.id);
            if (isProductExist) {
                return state.map((item) => (
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                ))
            } else {
                state.push(action.payload);
            }
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        decQuantity: (state, action) => {
            return state.map((item) => (
                item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
            ))
        }
    }
});

export const { add, remove,decQuantity } = CartSlice.actions;
export default CartSlice.reducer;
