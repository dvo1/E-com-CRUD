import React from 'react'
import {  useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'


const ProductItem = ({item}) => {
    const dispatch = useDispatch()
    return (
        <>
        <div className='product' >
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name}/>
            <div className='details'>
                <span>{item.desc}</span>
                <span className='price'>${item.price}</span>
                
            </div>
            <button
            onClick={() => dispatch(addToCart(item))}
            >Add to Cart</button>
        </div>
        </>
    )
}

export default ProductItem