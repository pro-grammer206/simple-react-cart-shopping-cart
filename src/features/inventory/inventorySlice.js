import { createSlice } from "@reduxjs/toolkit";
import items from "../../items";

const initialState = {
  items,
  amount: 0,
  itemsInCart: [],
  isLoading: false,
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    add: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      const { inStock, qty } = state.items[index];
      if (index >= 0 && inStock > 0 && qty <= 3) {
        let { qty, inStock, price } = state.items[index];
        qty += 1;
        inStock -= 1;
        let currAmt = state.amount + price;
        const newItem = { ...state.items[index], qty, inStock };
        state.items[index] = newItem;
        state.amount = currAmt;
        state.itemsInCart = state.items.filter((item) => item.qty > 0);
      } else {
        console.log("item not found");
      }
    },
    remove: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      const { qty, inStock } = state.items[index];
      if (index >= 0 && qty > 0 && inStock > 0) {
        let { qty, inStock, price } = state.items[index];
        qty -= 1;
        inStock += 1;
        let currAmt = state.amount - price;
        const newItem = { ...state.items[index], qty, inStock };
        state.amount = currAmt;
        state.items[index] = newItem;
        state.itemsInCart = state.items.filter((item) => item.qty > 0);
      } else {
        console.log("item not found");
      }
    },
    clearAll: (state) => {
      state.items = initialState.items;
      state.amount = 0;
      state.itemsInCart = [];
    },
  },
});

export const { add, remove, clearAll } = inventorySlice.actions;
export default inventorySlice.reducer;
