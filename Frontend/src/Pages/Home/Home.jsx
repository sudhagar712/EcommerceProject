import axios from "axios";
import React , {useEffect , useState} from "react";
 import { Products } from "../../Products";
import Product from "../../Components/Product";
import Bannervideo from "../../Components/Bannervideo";
import Virtual from "../../Components/Virtual";




const Home = () => {

 const [products , setProducts] = useState([]);

useEffect(() => {
  
const fetchProducts = async () => {

  const {data} = await axios.get("http://localhost:5000/api/products")
  console.log(data)
  setProducts(data);
}
 
fetchProducts();

},[]);



  return (
    <div className="container-fluid">
      <Bannervideo />

      <h1 className="text-3xl md:mt-[200px]  font-extrabold text-center ">All products</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-3 gap-5  mt-10">
        {products.map((product) => (
          <Product key={product.id} product={product} />

        ))}
      </div>

      <Virtual/>


    </div>
  );
};

export default Home;