"use client";

import React from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Excellence from "../components/Excellence";
import Framework from "../components/Framework";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function PortfolioContent() {
  useScrollAnimation();

  return (
    <>
      <header className="sticky top-0 z-50 animate-fade-in text-white">
        <Navbar />
      </header>
      <main className="w-full text-white">
        <Home />
        <About />
        {/* <Excellence /> */}
        <Framework />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
