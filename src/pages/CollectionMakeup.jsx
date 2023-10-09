import React from "react";
import Navbar2 from "../components/Navbar2";
import HeroMakeup from "../components/FacialMakeup/HeroMakeup";
import ProductsMakeup from "../components/FacialMakeup/ProductsMakeup";
import CollectionsMakeup from "../components/FacialMakeup/CollectionsMakeup";


function CollectionMakeup() {
  return (
    <div className="py-6 lg:px-[50px] px-4 gap-5 flex flex-col">
      <Navbar2 />
      <HeroMakeup/>
      <ProductsMakeup/>
      <CollectionsMakeup/>
    </div>
  );
}

export default CollectionMakeup;
