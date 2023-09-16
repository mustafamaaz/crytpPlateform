import React from 'react'
import Navbar from '../Components/Navbars'
import Footer from '../Components/Footer'
import Stackfront from '../Components/Stackfront'
import Bottombar from '../Components/Bottombar'
import Logotag from '../Components/Logotag'


export default function Pool() {
  return (
    <div>

<div className='footerbackgroundcolor'>
<Navbar/>
</div>

<div> <Logotag></Logotag> </div>

<div> <Bottombar/>  </div>
        

<div className='changebackgroundcolor'>
<Stackfront/> 
</div>
   

        <Footer/>


    </div>
  )
}
