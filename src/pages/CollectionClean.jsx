import React from "react";
import Navbar2 from "../components/Navbar2";
import HeroClean from "../components/Clean/HeroClean";
import ProductsClean from "../components/Clean/ProductsClean";
import CollectionsPurification from "../components/Clean/CollectionsPurification";

function CollectionClean() {
  return (
    <div className="py-6 lg:px-[50px] px-4 gap-5 flex flex-col">
      <Navbar2 />
      <HeroClean/>
      <ProductsClean/>
      <CollectionsPurification/>
    </div>
  );
}

export default CollectionClean;
