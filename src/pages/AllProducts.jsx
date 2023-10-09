import React from "react";
import AllProductsContainer from "../components/Products/AllProductsContainer";
import Nav from "../components/Products/Nav";

function AllProducts() {
  return (
    <div className="py-6 lg:px-[50px] px-4 gap-5 flex flex-col">
      <Nav />
      <AllProductsContainer/>
    </div>
  );
}

export default AllProducts;
