import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Hero from "./sections/Hero";
import ServicesGrid from "./sections/ServicesGrid";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/common/Footer";
import Portfolio from "./sections/Portfolio";


function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reviews" element={<Testimonials />} />  {/* ✅ ADD */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;