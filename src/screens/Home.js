import React from 'react'
import Navbar from '../Components/Navbars'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer'
import Bottombar from '../Components/Bottombar'
import Logotag from '../Components/Logotag'

export default function Home() {
  return (
    <div  >

      <Navbar></Navbar>
       <Logotag/>  
      <div  className='changebackgroundcolor'>  <Cards></Cards>
      
      <Bottombar/> 


<Footer></Footer>  

      </div>

     

    </div>
  )
}
