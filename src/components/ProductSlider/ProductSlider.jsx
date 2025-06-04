import React from "react";
import { Link } from "react-router-dom";
import "./ProductSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import kitImage from "../../assets/kit.jpg";
import lipstickImage from "../../assets/lipstick.jpg";
import perfumeImage from "../../assets/perfume.jpg";
import mascaraImage from "../../assets/mascara.jpg";
import eyelinerImage from "../../assets/eyeliner.jpg";
import blushImage from "../../assets/blush.jpg";
import shopVideo from "../../assets/video2.mp4";

const products = [
  { id: 1, name: "Makeup Kit", price: 1200, image: kitImage },
  { id: 2, name: "Lipstick Set", price: 850, image: lipstickImage },
  { id: 3, name: "Perfume", price: 1750, image: perfumeImage },
  { id: 4, name: "Mascara", price: 950, image: mascaraImage },
  { id: 5, name: "Eyeliner", price: 500, image: eyelinerImage },
  { id: 6, name: "Blush Palette", price: 1100, image: blushImage },
];

const ProductSlider = () => {
  return (
    <div className="product-slider-container">
      <h2 className="slider-title">Makeup Products</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 1, disableOnInteraction: false }}
        speed={3000}
        loop={true}
        pagination={false}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to="/shop" className="product-card-link">
              <div className="product-card-box">
                <img
                  src={product.image}
                  className="product-image1"
                  alt={product.name}
                />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">Rs. {product.price.toLocaleString()}</p>
                <span className="product-link1">Order Now</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Video and Detail Section */}
      <div className="video-detail-section">
        <div className="detail-box">
          <h3>Why Choose Us</h3>
          <p>
            We specialize in makeup essentials including kits, lipsticks, perfumes,
            mascaras, blushes and more — all selected to enhance your natural beauty.
          </p>
          <p>
            Experience quick delivery, top-rated sellers, and exceptional quality —
            every time you order.
          </p>
        </div>
        <div className="video-box">
          <video autoPlay muted loop controls>
            <source src={shopVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
