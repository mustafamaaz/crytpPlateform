import React from 'react'
import './bridge.css';
import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Bridge() {
  return (
    <div className='changebackgroundcolor  bridge-whole-page-componenet' >
      <section>
        <div style={{ display: 'flex', width: '100%', height: 'auto', justifyContent: "space-between", paddingLeft: '30px', paddingTop: '25px', paddingRight: '20px', paddingBottom: '60px' }}>
          <img
            src='logohalfname.png'// Replace with the actual path to your logo image
            alt="Logo"
            style={{ height: '55px', width: 'auto', }}
          />


          <div   >
            <div className='bridge-nav-collect-btn'  >
              Connect Wallet
            </div>
          </div>
        </div>
      </section>



      <div style={{ display: 'flex', flexDirection: "column", flexWrap: 'wrap', alignContent: 'center', padding:'20px' }} >

        <div className='bridge-card-first-row' >


          <div className='bridge-custom-btn-1 fs-5' style={{ display: 'flex', flexDirection: 'row' }} >
            <div style={{ backgroundColor: 'gray', height: '50px', width: '50px', margin: '15px', marginRight: '30px', borderRadius: '10px' }} >  </div>
            <div style={{ display: 'flex', flexDirection: "column" }} >
              <div style={{ fontSize: '14px', marginTop: '10px', color: 'gray' }} >
                From</div>


              <div style={{ display: 'flex', flexDirection: 'row' }} >

                <div style={{ fontSize: '17px', color: 'white', marginRight: '14px' }} >
                  select
                </div>
                <div style={{ display: "inline-block", transform: 'rotate(180deg)', fontSize: '15px', position: 'relative', top: '-4px' }}  >^ </div>
              </div>
              </div>

          </div>



          <div style={{margin:'10px'}} >
            <img
              src='horzontalarrow.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{ height: '20px', width: 'auto', }}
            />
          </div>



<div className='bridge-custom-btn-1 fs-5' style={{ display: 'flex', flexDirection: 'row' }} >
            <div style={{ backgroundColor: 'gray', height: '50px', width: '50px', margin: '15px', marginRight: '30px', borderRadius: '10px' }} >  </div>
            <div style={{ display: 'flex', flexDirection: "column" }} >
              <div style={{ fontSize: '14px', marginTop: '10px', color: 'gray' }} >
                From</div>


              <div style={{ display: 'flex', flexDirection: 'row' }} >

                <div style={{ fontSize: '17px', color: 'white', marginRight: '14px' }} >
                  select
                </div>
                <div style={{ display: "inline-block", transform: 'rotate(180deg)', fontSize: '15px', position: 'relative', top: '-4px' }}  >^ </div>
              </div>
              </div>
              
          </div>

        </div>



        <div style={{ height: '60px', display: 'flex', justifyContent: 'space-around', marginBottom:'43px' }} >
          <input style={{ width: '100%', height: '70px', borderRadius: '10px', display: 'flex', alignContent: 'center' , backgroundColor:'black' , color:'white' }} type="text" class="outlined-input" placeholder="0.0" />
        </div>

<div style={{display:'flex' , flexDirection:'column'  , borderRadius:'10px' ,outline :'2px solid white', height:'100px' ,flexWrap: 'wrap', marginBottom:'33px'  }} >

<div style={{ marginTop:"15px"  , paddingLeft:'20px'}} >
  Gass on desination
</div>

<div style={{   marginTop:"16px"  , paddingLeft:'20px' }} >
 you will received
</div>

</div>




        <div  className='bridge-maa-connect-btn' >
                    <div className='bridge-maa-btn-text'  to="/btn" >Connect Wallet</div>
                    </div> 





      </div>









    </div>
  )
}
