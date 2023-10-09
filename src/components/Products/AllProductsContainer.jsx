import React from 'react'
import { allproducts } from './AllProducts';
import ProductCard from '../ProductCard';

function AllProductsContainer() {
    return (
        <div
        className="pt-12 pb-16 justify-start gap-14 flex flex-col w-full h-fit flex-wrap relative"
      >
        <div className="flex items-center gap-2">
          <div className="line"></div>
          <h1 className="text-xl font-light font-['Petrona']">Catálogo con todos Nuestros Productos</h1>
        </div>
  
        <div className="grid grid-cols-4 gap-12 w-full">
          {allproducts.map((item, index) => {
            return (
              <div key={index}>
                <ProductCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    )
}

export default AllProductsContainer
