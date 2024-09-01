import React from "react";
import {Products}   from "../../Products";
import Product from "../../Components/Product";

const Home = () => {
  return (
    <>
      <h2 className="text-3xl mt-6  font-semibold">All products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-5  mt-6">
        {Products.map((product) => (
          <Product  key={product.id} product={product} />

        ))}
      </div>
    </>
  );
};

export default Home;