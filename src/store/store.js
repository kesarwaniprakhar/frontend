import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import paginationSlice from "../slices/paginationSlice";
import authSlice from "../slices/authSlice";

const store = configureStore({
    reducer: {
        product: productSlice,
        pagination: paginationSlice,
        auth: authSlice
    }
})

export default store

