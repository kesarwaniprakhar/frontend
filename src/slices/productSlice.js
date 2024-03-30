import { createSlice } from "@reduxjs/toolkit";


export const getProductsThunk = (page) => {
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
            throw "Error while fetching Products"
        }
    }
}

export const getProductsThunkById = (product_id) => {
    return async (dispatch) => {
        try{
            let response = await fetch(`http://localhost:4000/api/v1/products${product_id}`, {
                method: 'GET'
            })

            response = await response.json()

            console.log("response", response)

            return response.products
        }catch(e){
            console.log("some error occurred inside getProductsThunk", e)
            throw "Error while fetching Products"
        }
    }
}


const productSlice = createSlice({
    name: "product",
    initialState: {
        currentProduct: null
    },
    reducers: {
        current: (state, action) => {
            state.currentProduct = action.payload
        }
    }
})

export const { current } = productSlice.actions 

export default productSlice.reducer