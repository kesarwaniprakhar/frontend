import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        page: 1
    },
    reducers: {
        changeToPage: (state, action) => {
            state.page = action.payload.page
        }
    }
})


export const { changeToPage } = paginationSlice.actions

export default paginationSlice.reducer