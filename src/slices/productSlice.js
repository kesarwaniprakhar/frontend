import { createSlice } from "@reduxjs/toolkit";


export const getProductsThunk = (products) => {
    return async (dispatch) => {
        try{
            let response = await fetch('http://localhost:4000/api/v1/admin/products', {
                method: 'GET'
            })

            response = await response.json()

            console.log("response", response)

            return response.products
        }catch(e){
            console.log("some error occurred inside getProductsThunk", e)
            return {error: e, message: 'Failed'}
        }
    }
}


const productSlice = createSlice({
    name: "product",
    initialState: {
        products: null
    },
    reducers: {
        replaceProducts: (state, action) => {
            state.products = action.payload
        }      
    }
})


export default productSlice.reducer