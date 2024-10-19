import axios from "axios";
import React, { useEffect, useState } from "react";
import { Products } from "../../Products";
import Product from "../../Components/Product";
import Bannervideo from "../../Components/Bannervideo";
import Virtual from "../../Components/Virtual";
import noitems from "../../assets/images/noproduct.jpg"



const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      const { data } = await axios.get("http://localhost:5000/api/products")
      console.log(data)
      setProducts(data);

    }

    fetchProducts();

  }, []);




  return (
    <div className="container-fluid mt-[100px]">
      <Bannervideo />

      <h1 className="text-4xl md:mt-[200px]   font-extrabold ">All products</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-3 gap-5  mt-10">




        {products.length === 0 ?
          <div className="flex items-center   justify-center mt-10 mb-10">

            <div className="w-full flex justify-center">
              <img src={noitems} alt="No items" className="w-auto" />



            </div>
          </div>
          : (
            products.map((product) => (
              <Product key={product.id} product={product} />

            ))
          )


        }
      </div>

      <Virtual />


    </div>
  );
};

export default Home;