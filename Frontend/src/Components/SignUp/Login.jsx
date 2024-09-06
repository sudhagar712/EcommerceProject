import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className="container-fluid mt-5 ">
      <div className=" min-w-full  flex justify-center items-center   ">

      <div className="bg-gray-200 w-auto  flex rounded-xl ">
          <div className="px-3 p-5 py-10 w-96">
           <h1 className="font-extrabold text-3xl mb-5" >Login</h1>
           <p className='text-lg mb-5'>Welcome To our Online Ecomerce Website Enjoy our Order! </p>
           <form >
            <input type="text" className="w-[100%] px-4 p-4 mb-10 outline-0  " placeholder="Enter a Name" required />
            <input type="tel"  className="w-[100%] px-4 p-4 mb-3 outline-0" placeholder="Enter a Password" required />
        
            <div className="flex justify-between  items-center">
              <span>Create a New account ?<Link to="/signup" className="text-blue-500 font-bold"> Signup</Link></span>
             
              <button className="bg-[#d8192a]  px-10 py-3 font-bold shadow-lg hover:shadow-2xl text-white"><Link to="/">Login</Link></button>
            </div>
           </form>
           <hr className="border border-gray-100 mt-5"/>
                   
                <div>



                </div>


          </div>

          <div className="max-sm:hidden ">
            <video width="300" height="100" autoPlay loop muted>
              <source src="https://videos.pexels.com/video-files/8306458/8306458-uhd_1440_2732_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>









        </div>


      </div>
    </div>
  )
}

export default Login
