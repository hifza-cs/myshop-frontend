import React, { useEffect, useState } from "react";
import "./Shop.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Shop = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const getAllProducts = async () => {
      const data = await axios.get("/all-products");
      if (data.status === 200) {
        setProducts(data?.data.products);
      }
    };
    getAllProducts();
  }, []);
  return (
    <div className="shop-page">
      {/* Welcome Text Centered */}
      <div className="shop-welcome">
        <h1>Welcome to My Shop</h1>
      </div>

      {/* Products Grid */}
      <div className="product-list">
        {products &&
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.imgUrl}
                alt={product.productName}
                className="product-image"
              />
              <div className="product-details">
                <h4>{product.productName}</h4>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
              <div className="product-actions">
                <Link
                  to={`/cart/${product._id}`}
                  className="action-btn buy-btn"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shop;
