import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import paginationSlice from "../slices/paginationSlice";

const store = configureStore({
    reducer: {
        product: productSlice,
        pagination: paginationSlice
    }
})

export default store

