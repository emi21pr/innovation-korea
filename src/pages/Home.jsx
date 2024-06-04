import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Participantes from "../components/Participantes";
import Panorama from "../components/Panorama";
import Analisis from "../components/Analisis";
import Gallery from "../components/Gallery";
import Crisis from "../components/Crisis";
import Conflicto from "../components/Conflicto";
import QR from "../components/QR";

function Home() {
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-col scroll-smooth justify-center items-center">
      <Navbar setActive={setActive}/>
      <Hero />
      <Participantes/>
      <Panorama/>
      <Analisis/>
      <Gallery/>
      <Crisis/>
      <Conflicto/>
      <QR active={active} setActive={setActive}/>
      <Footer />
    </div>
  );
}

export default Home;
