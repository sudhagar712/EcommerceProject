import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { FaRegEye, FaEyeSlash } from 'react-icons/fa';
import loginvideo from "../../assets/Videos/bannervideo.mp4"

const Login = () => {

  const [showpassword, setShowPassword] = useState(false);
 

  const handleShoepassword = () => {
    setShowPassword((prevState) => !prevState)
  }




  return (
    <div className="container-fluid bg-[#dda753] h-[200px] mt-5 pt-5  ">
      <div className=" min-w-full  flex justify-center items-center   ">

      <div className="bg-gray-200 w-auto  flex rounded-xl ">
          <div className="px-3 p-5 py-10 w-96">
           <h1 className="font-extrabold text-3xl mb-5" >Login</h1>
           <p className='mb-5'><em>Welcome To our Online Ecomerce Website Enjoy our Order!</em> </p>
           <form >
            <input type="text" className="w-[100%] px-4 p-4 mb-10 outline-0  " placeholder="Enter a Name" required />
            <div className="relative">
                <input type={showpassword ? "text" : "password"} className="w-[100%] px-4 p-4 mb-3 outline-0" placeholder="Enter a Password" required />
                <button className="absolute right-3 text-gray-400 top-5" onClick={handleShoepassword} type="button">
                  {showpassword ? <FaRegEye /> : <FaEyeSlash />}
                </button>
              </div>
        
            <div className="flex justify-between  items-center mt-10">
              <span>Create a New account ?<Link to="/signup" className="text-blue-500 font-bold"> Signup</Link></span>
             
              <button className="bg-[#d8192a]  px-10 py-3 font-bold shadow-lg hover:shadow-2xl text-white"><Link to="/">Login</Link></button>
            </div>
           </form>
           <hr className="border border-gray-100 mt-5"/>
                   
                <div>



                </div>


          </div>

          <div className="max-sm:hidden ">
            <video width="300" height="500" autoPlay loop muted>
              <source src={loginvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video width="300" height="600" autoPlay loop muted>
              <source src={loginvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video width="300" height="600" autoPlay loop muted>
              <source src={loginvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>









        </div>


      </div>
    </div>
  )
}

export default Login
