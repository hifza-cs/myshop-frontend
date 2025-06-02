import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Cart.css";


import axios from "axios";


const Cart = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const product = await axios.get("/product", { params: { id } });
      if (product.status === 200) {
        setProduct(product?.data.product);
      }
    };
    getProduct();
  }, [id]);

  return (
    <div className="cart-container">
      <div className="cart-box">
        <div className="cart-image-side">
          <img
            src={product?.imgUrl}
            alt={product?.productName}
            className="cart-image"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="cart-detail-side">
          <h2 className="cart-title">{product?.productName}</h2>
          <p className="cart-price">{product?.price}</p>
          <p className="cart-description">{product?.description}</p>
          <button className="cart-btn" onClick={()=>{alert(`${product?.productName} add to cart successfully`)}}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
