import React, { useState, useEffect } from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import video1 from "../assets/Videos/bannervideo.mp4"
import video2 from "../assets/Videos/bannervideo2.mp4"
import video3 from "../assets/Videos/bannervideo3.mp4"


const videos = [video1, video2, video3];

const Bannervideo = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);




  useEffect(() => {
    const interval = setInterval(() => {
      nextVideo();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentVideoIndex]);







  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };


  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <div className="relative md:h-screen h-smallscreen w-full">

      <video
        className="absolute top-0 left-0 w-full h-screen md:h-full object-cover"
        src={videos[currentVideoIndex]}
        autoPlay
        loop
        muted
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-[red] bg-opacity-10">
        <marquee>
          <h1 className="text-xl text-white md:text-xl font-bold md:p-5">
            Welcome to My Ecommerce Site. Happy Shopping!!!!!!
          </h1>
        </marquee>


        {/* Carousel Controls */}
        <div className="hidden flex mt-4 max-md:space-x-[200px] md:space-x-[950px] mb-5">
          <button
            onClick={prevVideo}
            className="px-4 py-2 bg-black bg-opacity-10 text-black rounded-full text-2xl">
            <MdOutlineArrowBackIos />
          </button>
          <button
            onClick={nextVideo}
            className="px-4 py-2  bg-black bg-opacity-10 text-black rounded-full text-2xl">
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannervideo;
