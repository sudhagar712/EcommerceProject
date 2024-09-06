import React, { useState } from 'react';

// Import your video files
import video1 from "../assets/Videos/bannervideo.mp4"
import video2 from "../assets/Videos/bannervideo.mp4"
import video3 from "../assets/Videos/bannervideo.mp4"

// Store the video sources in an array
const videos = [video1, video2, video3];

const Bannervideo = () => {
  // State to track the current active video
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to go to the next video
  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to go to the previous video
  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <div className="relative md:h-screen h-smallscreen w-full">
      {/* Display the current video */}
      <video
        className="absolute top-0 left-0 w-full h-screen md:h-full object-cover"
        src={videos[currentVideoIndex]}
        autoPlay
        loop
        muted
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-10">
        <marquee>
        <h1 className="text-xl md:text-xl font-bold md:p-5">
          Welcome to My Ecommerce Site. Happy Shopping!!!!!!
        </h1>
        </marquee>
       

        {/* Carousel Controls */}
        <div className="flex mt-4 space-x-4">
          <button 
            onClick={prevVideo} 
            className="px-4 py-2 bg-white text-black rounded">
            Previous
          </button>
          <button 
            onClick={nextVideo} 
            className="px-4 py-2 bg-white text-black rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bannervideo;
