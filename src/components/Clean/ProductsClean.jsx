import React from 'react'
import ProductCard from '../ProductCard';
import { products3 } from './CleanProducts';

function ProductsClean() {
    return (
        <div
      className="pt-12 pb-16 justify-start gap-14 flex flex-col w-full h-fit flex-wrap relative"
    >
      <div className="flex items-center gap-2">
        <div className="line"></div>
        <h1 className="text-xl font-light font-['Petrona']">Productos</h1>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 w-full">
        {products3.map((item, index) => {
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

export default ProductsClean
