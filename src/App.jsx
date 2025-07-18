import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Capabilities from "./sections/Capabilities"; // <-- add this

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Capabilities />   {/* <-- add this */}
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
