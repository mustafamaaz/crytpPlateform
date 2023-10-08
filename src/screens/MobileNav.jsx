import React from 'react'
import './cart.css';

import { useNavigate } from 'react-router-dom';

export default function MobileNav() {


  let navigate = useNavigate()

  function randerpage1 (){
    navigate('/')
  }

  function randerpage2 (){

    navigate('/pool')
  }



  function randerpage3 (){

    navigate('/stake')
  }


  function randerpage4 (){

    navigate('/bridge')
  }



  function randerpage5 (){

    navigate('/lend')
  }



    
  return (
    <div>

<div className='buttons-main-cont' style={{display:'flex' , flexDirection:'column' ,alignItems:'center' , alignContent:'center',color:'black' , marginTop:'30px',fontWeight:'600' }} >

<div className='mobile-nav-btn-padding'  >
    Home
</div>


<div className='mobile-nav-btn-padding' onClick={randerpage1} >
     Trade
</div>


<div className='mobile-nav-btn-padding' onClick={randerpage3} >
    Pool
</div>

<div className='mobile-nav-btn-padding' onClick={randerpage2} >
    Stake
</div>
<div className='mobile-nav-btn-padding' onClick={randerpage4} >
    Bridge
</div>
<div className='mobile-nav-btn-padding'>
    Farm
</div>

<div className='mobile-nav-btn-padding' onClick={randerpage5} >
    Lend
</div>

</div>

<div>
<hr style={{color:'gray' , marginLeft:'7%' , marginRight:'7%'}}></hr>
</div>


<select  className='ladger-btn-for-mobileNav  ' aria-label='dropdown' >
    {Array.from(Array(2), (e, i) => {
      return (
        <option >XRP Ledger</option>
      )
    })}
  </select>

  

    </div>
  )
}
