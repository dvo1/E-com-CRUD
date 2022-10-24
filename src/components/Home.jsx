import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productsFetch } from '../features/products/productSlice'
import ProductItem from './ProductItem'

const Home = () => {
  const { items } = useSelector((state) => state.product)
  const dispatch = useDispatch()
  // console.log(items)
  return (
    <>
      <div className='home-container'>
        <h2>New Arrivals</h2>
        <div className='products'>
          {items?.map((item) => {
            return (
              <>
                <ProductItem key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default Home