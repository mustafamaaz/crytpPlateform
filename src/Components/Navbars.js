
import {React, useState }  from 'react';
// import  from 'react-router-dom'
import { Link,useNavigate } from 'react-router-dom'
import './style.css';


import Modal from '../Model';
import Cart from '../screens/Cart';

export default function Navbar() {


  function  collectBtn (){
    localStorage.setItem('code',"connect");
    setCartView(true)
  }






let navigate = useNavigate();

const [cartView,setCartView] = useState(false);


  return (
  

      <div className='hiddennav '  >


        <nav className="navbar-expand-lg  "   >
          <div  className=" navsyt nav-color">

           
<div className='logoname' >
<img
              src='logofullname.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '80px', width: 'auto',  }}
            />

</div>
          

          

            <div className='btncenter'  >

              <div className='beachkybtn' >
              <Link className="btn   mx-1 fs-4 changebutton " to = "/"  >
                Trade
              </Link>
             
            
             
             
              <Link className="btn   mx-1 fs-4  changebutton "  to= "/pool" >
                 Pool
              </Link>
             
            
              &nbsp;&nbsp;  &nbsp;&nbsp;
              
              <Link className="btn   mx-1 fs-4 changebutton "  to= "/stake" >
              portfolio
              </Link>

              <svg style={{ paddingRight:'30px' ,paddingLeft:'50px', width:'auto'}} className='  btn   mx-1 fs-4   mx-1  dotbtn  ' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>

              </div>




              <div className='itemflex' >


<div>

  <div className="btn   m-2 fs-5 custom-btn-2 " to="/connectwallet"  onClick={collectBtn}  >Connect wallet</div>


  { cartView? <Modal onClose={()=> setCartView(false)}   >  <Cart/> </Modal>:null }

</div>
<div>

  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

  <select  className='m-2 h-20 custom-btn-1 fs-5 ' aria-label='dropdown' >
    {Array.from(Array(2), (e, i) => {
      return (
        <option>XRP Ledger</option>
      )
    })}
  </select>

  
</div>
</div>


            </div>

          </div>
          
        </nav>

      </div>
   
  )
}