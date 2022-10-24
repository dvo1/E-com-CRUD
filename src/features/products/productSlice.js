import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    items: [],
    status: null,
    error: null,
}

export const productsFetch = createAsyncThunk(
    'product/productsFetch',
    async (id = null, {rejectWithValue}) => {
        try {
            const res = await axios.get('http://localhost:5000/products')
            return (
                res?.data
            )  
        } catch (error) {
           return rejectWithValue('error has occured') 
        }

       
    }


)

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = 'pending'
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export const { } = productSlice.actions

export default productSlice.reducer