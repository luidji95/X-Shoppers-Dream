import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../features/products/types";

type CartItem = Product & { quantity: number };

type CartState = {
  cartItems: CartItem[];
};

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (state, action: PayloadAction<Product>) => {
    //   const item = action.payload;
    //   const existingItem = state.cartItems.find((i) => i.id === item.id);
    //   if (existingItem) {
    //     existingItem.quantity += 1;
    //   } else {
    //     state.cartItems.push({
    //       ...item,
    //       quantity: 1,
    //     });
    //   }
    // },
  },
});

// export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
