import React from 'react'
import ProductItem from './ProductItem';
import { productData } from './productData';

function ProductList() {
  return (
    <>
      <div className="container mt-5">
        <div className="row g-3">
          <div className="col-12">
            <h1>Phone List</h1>
          </div>
          <ProductItem productData={productData} />
        </div>
      </div>
    </>
  )
}

export default ProductList;
