import React from "react";
import Footer from "../../shared/Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h1 className="text-white text-center mt-7 text-4xl font-bold">About Me</h1>
      <About></About>
      <h1 className="text-white text-center mt-7 text-4xl font-bold">Features</h1>
      <Features></Features>
    </div>
  );
};

export default Home;
