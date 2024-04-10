import { createSlice } from '@reduxjs/toolkit'


export const loginThunk = (email, password) =>{
    return async (dispatch) => {
        try{
            console.log('window', window)
            let response = await fetch(`${window._env_.LOGIN_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }) 

            response = await response.json()
            console.log("logging", response)

            return response
        }catch(e){
            console.log("some error occurred while logginng", e)
            throw new Error("Error while logging!!")
        }
    }
}

export const registerThunk = (email, password, name) =>{
    return async (dispatch) => {
        try{
            console.log('window', window)
            let response = await fetch(`${window._env_.REGISTER_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    name,
                })
            }) 

            response = await response.json()
            console.log("registering", response)

            return response
        }catch(e){
            console.log("some error occurred while registering", e)
            throw new Error("Error wile registering!!")
        }
    }
}


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isloggedIn: false,
        isloggedOut: true,
    },
    reducers: {
        isLoggedIn: (state, action) => {
            state.isloggedIn = action.payload.loggedIn
        },
        
        isLoggedOut: (state, action) => {
            state.isLoggedOut = action.payload.loggedOut
        },
    }

})


export const { isLoggedIn, isLoggedOut } = authSlice.actions

export default authSlice.reducer