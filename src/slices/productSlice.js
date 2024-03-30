import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "product",
    initialState: {
        currentProduct: null,
        totalCount: 0,
    },
    reducers: {
        current: (state, action) => {
            state.currentProduct = action.payload
        },
        replaceTotalCount: (state, action) => {
            state.totalCount = action.payload.totalCount
        }
    }
})

export const getProductsThunk = (page) => {
    return async (dispatch) => {
        try{
            let response = await fetch(`http://localhost:4000/api/v1/admin/products?page=${page}`, {
                method: 'GET'
            })

            response = await response.json()

            console.log("response", response)

            dispatch(productSlice.actions.replaceTotalCount({totalCount: response?.totalCount}))

            return response
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

export const { current, replaceTotalCount } = productSlice.actions 

export default productSlice.reducer