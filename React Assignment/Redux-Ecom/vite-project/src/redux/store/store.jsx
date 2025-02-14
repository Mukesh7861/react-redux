import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage
import cartSlice from "../slice/cartSlice";
import wishSlice from "../slice/wishSlice";

// Persist configurations for cart
const cartPersistConfig = {
    key: "cart",
    storage,
};

const wishPersistConfig = {
    key: "wishlist",
    storage,
};

// Create persisted reducers
const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);
const persistedWishReducer = persistReducer(wishPersistConfig, wishSlice);

const mystore = configureStore({
    reducer: {
        cart: persistedCartReducer,
        wish: persistedWishReducer,
    },
});

export const persistor = persistStore(mystore);

export default mystore;
        