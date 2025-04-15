import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    cartItems: [];
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((i) => i.id === item.id);

            existingItem ? existingItem.quantity += 1 : state.cartItems.push({...item, quantity: 1,});
        }
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;