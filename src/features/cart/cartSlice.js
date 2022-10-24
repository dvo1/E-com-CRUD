import { createSlice } from '@reduxjs/toolkit'

import { toast } from 'react-toastify'

const initialState = {

    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,

}



export const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cartItems.findIndex((product) => product.id === action.payload.id)
            if (existingProduct >= 0) {
                state.cartItems[existingProduct].cartQuantity++;
                toast.info('increased product quantity', {
                    position: 'bottom-center'
                })
            } else {
                const newProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(newProduct);
                toast.success('new product added to cart', {
                    position: 'bottom-center'
                })


                // This is to control cartTotalQuantity
                state.cartTotalQuantity++
            }

            // const itemIndex = state.cartItems.findIndex (
            //     (item) => item.id ===action.payload.id
            // );
            // if (itemIndex >= 0) {
            //    state.cartItems[itemIndex].cartQuantity += 1; 
            // } else {
            //     const tempProduct = {...action.payload, cartQuantity:1};
            //     state.cartItems.push(tempProduct)
            // } 
        },

        removeCart: (state, action) => {
            const nextItems = state.cartItems.filter((item) =>
                item.id !== action.payload.id);
            state.cartItems = nextItems;
            toast.error('Product removed!', {
                position: 'bottom-center'
            })
        },

        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) =>
                item.id === action.payload.id);

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity--
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextItems = state.cartItems.filter((item) =>
                    item.id !== action.payload.id);
                state.cartItems = nextItems;
            }
        },

        clearCart: (state, action) => {
            state.cartItems = []
        },

        getTotals: (state, action) => {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {

                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity

                cartTotal.total = cartTotal.total + itemTotal
                cartTotal.quantity = cartTotal.quantity + cartQuantity

                return cartTotal;
            },
                {
                    total: 0,
                    quantity: 0,
                })

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    },
})




export const { addToCart, removeCart, clearCart, decreaseCart, getTotals } = cartSlice.actions

export default cartSlice.reducer