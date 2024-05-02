import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Actor from "../components/Actor";
import Discurso from "../components/Discurso";
import Repertorios from "../components/Repertorios";
import Recursos from "../components/Recursos";
import PropuestaHome from "../components/PropuestaHome";

function Home() {
  return (
    <div className="py-4 lg:px-28 px-8 gap-5 flex flex-col">
      <Navbar />
      <Hero />
      <Actor/>
      <Discurso/>
      <Repertorios/>
      <Recursos/>
      <PropuestaHome/>
      <Footer />
    </div>
  );
}

export default Home;
