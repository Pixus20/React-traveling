import React from 'react'
import './app.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

export const App = () => {
   return (
      <>
         <Navbar/>
         <Home/>
         {/*<Main/>
         <Footer/>*/}
      </>
   )
}
export default App