import React from 'react'
import ReactCompareImage from 'react-compare-image';
import beforeimage from "../assets/images/before.png"
import afterimage from "../assets/images/after.png";
import shade from "../assets/images/shade.png";


const Virtual = () => {
  return (
    <div className="container bg-[#e6a442]  mt-10">
        <div className='grid md:grid-cols-2 gap-10 mt-5'>
        <div className="md:grid-cols-6  p-10">
             <h1 className=" font-extrabold text-4xl ">VIRTUAL TRY-ON</h1>
             <h3 className="text-2xl  mt-9">NEVER BUY THE WRONG SHADE AGAIN</h3>
             <h1 className="font-extrabold text-3xl mt-10 mb-10">Try Now!</h1>

                   <img src={shade}/>

            </div>
        <div className= "md:grid-cols-6  mt-5">
        <ReactCompareImage leftImage={beforeimage} rightImage={afterimage} />
            </div>

           
       
        </div>
        
      
    </div>
  )
}

export default Virtual
