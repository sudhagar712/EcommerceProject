import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaRegEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {

  const [showpassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShoepassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const handleConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState)
  }




  return (
    <div className="container-fluid bg-yellow-300 h-[200px] mt-5 pt-5 ">
      <div className=" min-w-full  flex justify-center items-center ">

        <div className="bg-gray-100 w-auto flex rounded-xl max-md:mb-[200px] md:mb-[100px]  ">
          <div className="px-3 p-5 py-10 w-96">
            <h1 className="font-extrabold text-3xl mb-3" >SignUp</h1>
            <form >
              <input type="text" className="w-[100%] px-4 p-4 mb-10 outline-0  " placeholder="Enter a Name" required />
              <div className="relative">
                <input type={showpassword ? "text" : "password"} className="w-[100%] px-4 p-4 mb-3 outline-0" placeholder="Enter a Password" required />
                <button className="absolute right-3 text-gray-400 top-5" onClick={handleShoepassword} type="button">
                  {showpassword ? <FaRegEye /> : <FaEyeSlash />}
                </button>
              </div>

              <div className="relative">
                <input type={showConfirmPassword ? "text" : "password"} className="w-[100%] px-4 p-4 mb-5 outline-0" placeholder="Enter a Confirm Password" required />
                <button className="absolute right-3 top-5 text-gray-400" onClick={handleConfirmPassword} type="button">{showConfirmPassword ? <FaRegEye /> : <FaEyeSlash />}</button>
              </div>








              <div className="flex justify-between  items-center">
                <span>Already as account ?<Link to="/login" className="text-blue-500 font-bold"> Login</Link></span>

                <button className="bg-[#d8192a]  px-10 py-3 font-bold shadow-lg hover:shadow-2xl text-white"><Link to="/">SignUp</Link></button>
              </div>
            </form>
            <hr className="border border-gray-100 mt-5" />

            <div>



            </div>


          </div>

          <div className="max-sm:hidden">
            <video width="300" height="100" autoPlay loop muted>
              <source src="https://videos.pexels.com/video-files/16742854/16742854-sd_360_640_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>









        </div>


      </div>
    </div>

  )
}

export default Signup
