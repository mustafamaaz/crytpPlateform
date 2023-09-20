import React from 'react'

import './cart.css';



export default function Cart() {

  return (
    <div>



<div  className='cart-uper-hader'  >
  
   Connect to Wallet </div>


<div style={{paddingTop:'70px' , display:'flex' , flexDirection:'column',height:'100%' }} >


<div style={{color:'gray' , marginLeft:'24px'}} >
  Recommended
  </div>


  <div className='modal-icons-cards' >
  <img   className='modal-icon-img'
              src='core.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '35px', width: 'auto',  }}
            />
            <div className='modal-card-text' >Core</div>


  </div>

  <div className='modal-icons-cards' >
  <img         className='modal-icon-img'
              src='coinbase.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '35px', width: 'auto',  }}
            />
             <div className='modal-card-text' >Coinbase Wallet</div>
  </div>


  <div  className='modal-icons-cards'>
  <img          className='modal-icon-img'
              src='trust.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '35px', width: 'auto',  }}
            />
             <div className='modal-card-text' >Trust Wallet</div>

  </div>


  <div  className='modal-icons-cards'>
  <img         className='modal-icon-img'
              src='meta.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '35px', width: 'auto',  }}
            />
               <div className='modal-card-text' >MetaMask</div>
          
  </div>




  <div  className='modal-icons-cards'>
  <img         className='modal-icon-img'
              src='connect.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '35px', width: 'auto',  }}
            />
               <div className='modal-card-text' >WalletConnect </div>
          
  </div>





  <div className='modal-icons-cards'>
  <img          className='modal-icon-img'
              src='ladger.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '35px', width: 'auto',  }}
            />
                         <div className='modal-card-text' >Ledger Live</div>

  </div>


  <div className='modal-icons-cards'>
  <img          className='modal-icon-img'
              src='okx.jpeg'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '35px', width: 'auto',  }}
            />
                         <div className='modal-card-text' >OKX Wallet</div>

  </div>


{/* -------------------rought ------------------------ */}

  <div className='modal-icons-cards'>
  <img          className='modal-icon-img'
              src='okx.jpeg'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '35px', width: 'auto',  }}
            />
                         <div className='modal-card-text' >OKX Wallet</div>

  </div>



  <div className='modal-icons-cards'>
  <img          className='modal-icon-img'
              src='okx.jpeg'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '35px', width: 'auto',  }}
            />
                         <div className='modal-card-text' >OKX Wallet</div>

  </div>





</div>


    </div>
  )
}