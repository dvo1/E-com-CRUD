import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {addToCart, removeCart, clearCart, decreaseCart, getTotals} from '../features/cart/cartSlice'

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const { cartTotalAmount } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);


  const handleRemoveCart = (cartItem) => {
      dispatch(removeCart(cartItem))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem))
  }
   
  const handleIncrease = (cartItem) => {
      dispatch(addToCart(cartItem))
  }

  return (
    <>
      <div className='cart-container'>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0? (
          <div className='cart-empty'>
            <p>Your cart is currently empty</p>
            <div className='start-shopping'>
              <Link to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity </h3>
              <h3 className="total">Total </h3>
            </div>
            <div className="cart-items">
              {cartItems?.map((cartItem) => {
                return (
                  <div className='cart-item' key={cartItem.id}>
                    <div className="cart-product">
                      <img src={cartItem.image} alt={cartItem.name} />
                      <div>
                        <h3>{cartItem.name}</h3>
                        <p>{cartItem.desc}</p>
                        <button className='cart-btn'
                        onClick={() =>handleRemoveCart(cartItem)}
                        >Remove</button>
                      </div>
                    </div>
                    <div className="cart-product-price">
                      ${cartItem.price}
                    </div>
                    <div className="cart-product-quantity">
                      <button className='cart-product-quantity-btn'
                      onClick={() => handleDecrease(cartItem)}
                      >-</button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button className='cart-product-quantity-btn'
                      onClick={() => handleIncrease(cartItem)}
                      >+</button>
                    </div>
                    <div className="cart-product-total-price">
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                    
                  </div>
                  
                )
              })}
            </div>
            <div className="cart-summary">
              <button className='clear-cart'
              onClick={() => handleClearCart()}
              > Clear Cart</button>
              <div className='cart-checkout'>
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">${cartTotalAmount}</span>
                </div>
                <p>Free Shipping</p>
                <button>Check out</button>
                <div className='continue-shopping'>
              <Link to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                </svg>
                <span>Continue Shopping</span>
              </Link>
            </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Cart