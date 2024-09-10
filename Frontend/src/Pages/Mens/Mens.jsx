import React from 'react'
import Menslist from '../../Components/Menslist'
import { MensProduct } from '../../Mensproduct'

const Mens = () => {
    return (
        <div className="container ">
            <h1 className="text-3xl text-center mt-10 font-extrabold">Mens collections</h1>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5  mt-10">
                {
                    MensProduct.map((mens) =>(
                        <Menslist key={mens.id} mens={mens}  />
                    ))
                }
               
            </div>

        </div>
    )
}

export default Mens
