import React from 'react'
import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";


const Rating = ({value , text}) => {
  return (
    <>
     <div className='flex items-center gap-x-1.5 mb-3  '>
        <span className="text-warning   text-2xl">
            {value>=1 ? <FaStar/> : value>=0.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
        </span>
        <span className="text-warning  text-2xl">
            {value>=2 ? <FaStar/> : value>=1.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
        </span>
        <span className="text-warning  text-2xl">
            {value>=3 ? <FaStar/> : value>=2.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
        </span>
        <span className="text-warning  text-2xl">
            {value>=4 ? <FaStar/> : value>=3.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
        </span>
        <span className="text-warning  text-2xl">
            {value>=5 ? <FaStar/> : value>=4.5 ? <FaStarHalfAlt/> :<FaRegStar/>}
        </span>
        
      
    </div>
    <div>
        <p>Reviews:{text && text}</p>
        </div>
    </>
   
  )
}

export default Rating
