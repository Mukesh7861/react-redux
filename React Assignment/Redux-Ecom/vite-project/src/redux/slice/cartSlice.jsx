import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    cartopen: false,
};

const cartSlice = createSlice({
    name: 'cart', 
    initialState,
    reducers: {
        additem(state, action) {
            const newItem = action.payload.id;
            const existingid = state.cartItem.find(item => item.id == newItem);

            if (existingid) {
                existingid.quantity++;
            } else {
                state.cartItem.push(action.payload);
            }
        },
        removeitem(state, action) {
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
        },
        incrementqty(state, action) {
            state.cartItem = state.cartItem.map(item => {
                if (item.id === action.payload) {
                    item.quantity++; // fixed typo here
                }
                return item;
            });
        },
        decrementqty(state, action) {
            state.cartItem = state.cartItem.map(item => {
                if (item.id === action.payload && item.quantity > 1) { // Ensure quantity is greater than 1
                    item.quantity--; // Decrement only if quantity is greater than 1
                }
                return item;
            });
        },
        togglecart(state, action) {
            state.cartopen = action.payload;
        },
    },
});

export const { additem, removeitem, incrementqty, decrementqty, togglecart } = cartSlice.actions;

export default cartSlice.reducer;
