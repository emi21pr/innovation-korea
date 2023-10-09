import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "../pages/Home";
import Footer from "./Footer";
import CollectionMakeup from "../pages/CollectionMakeup";
import CollectionSkincare from "../pages/CollectionSkincare";
import CollectionClean from "../pages/CollectionClean";
import AllProducts from "../pages/AllProducts";

function Layout() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/collection-makeup" element={<CollectionMakeup />} />
          <Route exact path="/collection-skincare" element={<CollectionSkincare />} />
          <Route exact path="/collection-clean-purification" element={<CollectionClean />} />
          <Route exact path="/products" element={<AllProducts />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Layout;
