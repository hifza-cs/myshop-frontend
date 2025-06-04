import React from "react";
import "./Home.css";
import heroVideo from "../../assets/video.mp4";
import { useNavigate } from "react-router-dom";
import FAQ from "../../components/FAQ/FAQ.jsx";
import About from "../About/About";
import ProductSlider from "../../components/ProductSlider/ProductSlider.jsx";


<ProductSlider />


const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="home-hero">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <div className="hero-text">
            <h1 className="fade-in">Buy & Sell Products with Online Shop</h1>
            <p className="fade-in delay-1">
              Welcome to a platform where you can buy the best products or sell your own creations with confidence.
              <br />
              <br />
              Connect with trusted buyers and sellers, grow your online presence, and build your business — all in one place.
            </p>
            <button
              className="shop-now-btn fade-in delay-2"
              onClick={handleStartClick}
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
      <ProductSlider />

      <About />
      <FAQ />
    </>
  );
};

export default Home;
