import React from 'react';
import { Products } from '../Products';
import { Link, useParams } from 'react-router-dom';
import Rating from './Rating';

const ProductScreen = () => {
  const { id: productid } = useParams();
  const product = Products.find((p) => p._id === Number(productid))

  console.log('Product:', product);

  if (!product) {
    return <div className='text-3xl flex justify-center items-center'>Product not found</div>;
  }

  return (
    <div className='mt-5 container'>
      <div className="mx-5">
      <Link to="/">
        <button className="bg-[#c63233] text-white px-4 p-4 ">Back to Home</button>
      </Link>
      </div>
     

      <div className='grid md:grid-cols-2 mt-5'>
        <div className='md:grid-cols-6 p-5 bg-yellow-100 max-sm:p-2 max-sm:bg-gray-100  shadow-xxl   '>
          <img src={`${product.images}`}  alt="Product Image"  className="max-sm:w-[400px] max-sm:h-[200px]    w-[900px] h-[400px] rounded"/>
        </div>

        <div className='md:grid-cols-6 p-10 '>
          <div className="card  shadow-xl">

            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <div>


                <p>Reviews: {product.numReviews}</p>
                <Rating value={product.rating} />

                <p>Price: ${product.price}</p>
                <p className="font-bold">{product.counterInStock > 0 ? "In stock " : "Out Stock"}</p>

              </div>
              <div className="card-actions">
                <button className="bg-[#d8192a] px-5 p-4 text-white">Add to cart</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
