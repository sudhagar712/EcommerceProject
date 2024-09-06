import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
 
  return (
    <>
      <Navbar />

      <div className="container mx-auto ">
        <Outlet />
      </div>
    </>
  );
};

export default App;
