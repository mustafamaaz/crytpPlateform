import React from 'react'
import Navbar from '../Components/Navbars'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div  >
      <div className='footerbackgroundcolor'> <Navbar></Navbar></div>
      <div  className='changebackgroundcolor'>  <Cards></Cards></div>


      <div>  <Footer></Footer>  </div>


    </div>
  )
}
