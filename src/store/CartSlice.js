import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: 'product',
    initialState: [],

    reducers: {
        addProduct: (state, action) => {
            console.log(action.payload, 'this is the payload')
            console.log(state, 'this is the state')
            state.push(action.payload);           
        },
        removeProduct: (state, action) => {
            return state.filter((item)=>item.id !== action.id)
        }
    }
})


export const { addProduct, removeProduct } = CartSlice.actions;
export default CartSlice.reducer;