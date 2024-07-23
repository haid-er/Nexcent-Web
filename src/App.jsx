import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Community />
      <Experience />
      <Stats />
      <Footer />
    </>
  );
}

export default App;
