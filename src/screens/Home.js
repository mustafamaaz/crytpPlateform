import React from 'react'
import Navbar from '../Components/Navbars'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import Bottombar from '../Components/Bottombar'
import Logotag from '../Components/Logotag'

export default function Home() {
  return (
    <div  >
      <div ><Navbar></Navbar></div>
      <div> <Logotag/>  </div>
      <div  className='changebackgroundcolor'>  <Cards></Cards></div>

      <div> <Bottombar/>  </div>


      <div>  <Footer></Footer>  </div>


    </div>
  )
}
