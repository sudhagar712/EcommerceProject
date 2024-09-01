import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Link to={`product/${product._id}`}>
      <div className="card bg-base-100   shadow-xl key={product._id}">
        <figure>
          <img src={product.images} className="w-[300px] h-[300px] " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <div>
            <Rating  value={product.rating} text={product.numReviews} />
          </div>
          <h3 className="cart-title">${product.price}</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
