import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'ionicons';
import { FaCartPlus } from "react-icons/fa6";


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleChange = () => {

    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="container-fluid ">
      <header className="  bg-white md:py-3 py-3">
        <nav className="flex justify-between items-center w-[92%]  ">
          {/* Logo content */}
          <div>
            <Link to="/">
              <h3 className="font-bold md:font-extrabold   md:text-3xl text-xl px-4 md:px-4  ">MSR_Kart</h3>
              
           


            </Link>
          </div>

          {/* menu list */}

          <div className={` z-20  md:static bg-white  absolute md:min-h-fit min-h-[60vh]  left-0 top-[9%] w-full md:w-auto md:flex items-center px-5 transition-all duration-500 ease-in-out 
            ${isMenuOpen ? 'block' : 'hidden'} md:block `}>
            <ul className="flex md:flex-row flex-col md:items-center items-center md:gap-[4vw]  gap-8 md:mt-0 mt-[100px] ">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-700  md:font-bold font-bold  md:transition-all duration-500 ease-in-out  "
                >
                  OwnProducts
                </Link>
              </li>
              <li>
                <Link
                  to="/mens"
                  id="allproducts"
                  className="hover:text-blue-700  md:font-bold  font-bold transition-all duration-500 ease-in-out   "
                >
                  Mens
                </Link>
              </li>
              <li>
                <Link
                  to="/womens"
                  id="allproducts"
                  className="hover:text-blue-700  md:font-bold  font-bold transition-all duration-500 ease-in-out   "
                >
                  Womens
                </Link>
              </li>
              <li>
                <Link
                  to="/kids"
                  className="hover:text-blue-700  md:font-bold   font-bold  transition-all duration-500 ease-in-out "
                >
                  Kids
                </Link>
              </li>
            </ul>
          </div>


          <div className="md:flex md:items-center  md:gap-5 flex items-center gap-2 ">
            <div className="bg-yellow-500 p-3 rounded-full  shadow-2xl">
              <FaCartPlus className="" />
            </div>

            {/* button */}

            <div>
              <button className="bg-yellow-500 px-5 md:p-2 md:font-bold font-bold  py-2 rounded shadow-lg hover:shadow-2xl">
                {" "}
                <Link to="signup">SignUp</Link>
              </button>
            </div>


            <div className="flex items-center gap-6 md:hidden">
              <button className="  font-extrabold text-black bg-transparent p-2 rounded-xl">
                <ion-icon onClick={toggleChange} name="menu" className="text-3xl cursor-pointer"></ion-icon>
              </button>

            </div>




          </div>

        </nav>
      </header>
    </div>
  );
};

export default Navbar;
