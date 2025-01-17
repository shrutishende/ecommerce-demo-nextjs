import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

export interface CartItems {
    id: number;
    price: number;
    quantity: number;
    title: string;
    image?: string;
}

export interface CartState {
    items: CartItems[];
    totalPrice: number;
}

export const initialState: CartState = {
    //items: JSON.parse(localStorage.getItem("cartItems") || "[]"),
    items: [],
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        initializeCart: (state) => {
            if (typeof window !== "undefined") {
                const storedCartItems = JSON.parse(
                    localStorage.getItem("cartItems") || "[]"
                );
                state.items = storedCartItems;
            }
        },

        addToCart: (state, action: PayloadAction<CartItems>) => {
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingItemIndex >= 0) {
                //  Item exists in cart, update quantity
                state.items[existingItemIndex].quantity +=
                    action.payload.quantity;
            } else {
                // Item doesn't exist, add it to the cart
                state.items.push(action.payload);
            }

            if (typeof window !== "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
        },

        removeFromCart: (state, action: PayloadAction<CartItems>) => {
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingItemIndex >= -1) {
                state.items.splice(existingItemIndex, 1);
            }

            if (typeof window !== "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
        },

        increaseCount: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity++;
            }

            if (typeof window !== "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
        },
        decreaseCount: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                // Ensure quantity doesn't go below 1
                item.quantity--;
            }

            if (typeof window !== "undefined") {
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
        },

        calculateTotalPrice: (state) => {
            state.totalPrice = state.items.reduce((total, item) => {
                return total + item.price * item.quantity;
            }, 0);
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    calculateTotalPrice,
    initializeCart,
} = cartSlice.actions;

export default cartSlice.reducer;
