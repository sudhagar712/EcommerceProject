import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <>
      <Navbar/>

      <div className="container mx-auto">
        <Home/>

      </div>
    </>
  )
}

export default App
