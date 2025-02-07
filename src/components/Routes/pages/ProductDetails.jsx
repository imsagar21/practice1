import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams()
    
  return (
    <div>
        {`Product Details of ${id} page`}
    </div>
  )
}

export default ProductDetails