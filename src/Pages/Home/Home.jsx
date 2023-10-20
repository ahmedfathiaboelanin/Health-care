/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import "./Home.css"
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Blog from "./Blog/Blog";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Blog />
      
    </main>
  );
}

export default Home
