import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HomePage from "./HomePage/HomePage";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default MainLayout;
