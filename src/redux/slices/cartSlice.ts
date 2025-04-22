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

            if (existingItem) {
                existingItem.quantity += 1;
              } else {
                state.cartItems.push({
                  ...item,
                  quantity: 1,
                });
              }
        }
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;