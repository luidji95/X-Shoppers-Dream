import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../features/products/types";

type CartItem = Product & {
  quantity: number;
  selectedColor: string;
};

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
    addToCart: (
      state,
      action: PayloadAction<{
        product: Product;
        quantity: number;
        selectedColor: string;
      }>
    ) => {
      const { product, quantity, selectedColor } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({
          ...product,
          quantity,
          selectedColor,
          image: product.image,
        });
      }
    },

    removeFromCart: (
      state,
      action: PayloadAction<{ id: string; selectedColor: string }>
    ) => {
      state.cartItems = state.cartItems.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.selectedColor !== action.payload.selectedColor
      );
    },

    increaseQuantity: (
      state,
      action: PayloadAction<{ id: string; selectedColor: string }>
    ) => {
      const item = state.cartItems.find(
        (i) =>
          i.id === action.payload.id &&
          i.selectedColor === action.payload.selectedColor
      );
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<{ id: string; selectedColor: string }>
    ) => {
      const item = state.cartItems.find(
        (i) =>
          i.id === action.payload.id &&
          i.selectedColor === action.payload.selectedColor
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (i) =>
            i.id !== action.payload.id ||
            i.selectedColor !== action.payload.selectedColor
        );
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
