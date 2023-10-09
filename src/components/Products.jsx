import React from "react";
import ProductCard from "./ProductCard";
function Products() {
  const products = [
    {
      photo_product: "/images/products/revlon.png",
      brand: "Revlon",
      name_product: "Base de maquillaje pieles normales/secas",
      price: "$14.50",
    },
    {
      photo_product: "/images/products3/theordinary.png",
      brand: "The Ordinary",
      name_product: "Hidratante con niacinamida",
      price: "$17.99",
    },
    {
      photo_product: "/images/products2/florence.png",
      brand: "Florence",
      name_product: "Parches de colágeno para ojeras y arrugas",
      price: "$24.99",
    },
    {
      photo_product: "/images/products/kleancolor.png",
      brand: "KleanColor",
      name_product: "Paleta de iluminadores",
      price: "$7.00",
    },
  ];

  return (
    <div
      id="products"
      className="pt-12 pb-16 justify-start gap-10 md:gap-14 flex flex-col w-full h-fit flex-wrap relative"
    >
      <div className="flex justify-between md:items-center md:flex-row flex-col">
        <div className="flex items-center gap-2">
          <div className="line"></div>
          <h1 className="text-xl font-light font-['Petrona']">Productos</h1>
        </div>
        <a className="text-lg font-light font-['Petrona'] nav-link" href="/products">
          Ver todos los productos
        </a>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 w-full">
        {products.map((item, index) => {
          return (
            <div key={index}>
              <ProductCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
