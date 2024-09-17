
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  
  // console.log(product)
  return (
    <Link to={`product/${product._id}`}>
      <div className="card bg-base-100   shadow-xl key={product._id}">
      <figure>
  <img
    src={product.images}
    className="w-[400px] h-[400px] transform transition-transform duration-400 hover:scale-110"
  />
</figure>
        <div className="card-body">
          <h1 className="card-title">{product.name}</h1>
          <div>
            <Rating  value={product.rating} text={product.numReviews} />
          </div>
          <h3 className="cart-title font-bold">Cost: ${product.price}</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
