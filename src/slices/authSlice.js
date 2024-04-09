import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loggedIn: false,
        loggedOut: true
    },
    reducers: {
        isLoggedIn: (state, action) => {
            state.loggedIn = action.payload.loggedIn
        },
        
        isLoggedOut: (state, action) => {
            state.isLoggedOut = action.payload.loggedOut
        },
    }

})

export const { isLoggedIn, isLoggedOut } = authSlice.actions

export default authSlice.reducer