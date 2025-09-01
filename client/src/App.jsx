import React from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import PortfolioGrid from "./components/PortfolioGrid.jsx";
import Testimonials from "./components/Testimonials.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div id="top">
      <NavBar />
      <main id="main">
        <Hero />
        <Services />
        <PortfolioGrid />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
