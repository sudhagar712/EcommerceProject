import React from 'react'
import Rating from './Rating'
import { Link } from "react-router-dom";



const Menslist = ({ mens }) => {
    // console.log(mens)
    return (
        <Link to={`mensCollection${mens._id}`}>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={mens.images}
                        alt="tshirt"
                        className="w-[300px] h-[300px]
        "/>
                </figure>
                <div className="card-body">
                    <h1 className=" font-extrabold">{mens.name}</h1>
                    <Rating value={mens.rating} text={mens.numReviews} />
                    <p><strong>Cost :</strong> Rs.{mens.price} /-</p>
                    <p>{mens.description}</p>

                </div>
            </div>
        </Link>

    )
}

export default Menslist
