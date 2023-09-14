
import {React, useState }  from 'react';
// import  from 'react-router-dom'
import { Link,useNavigate } from 'react-router-dom'
import './style.css';
import './navbar.css';

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
    <header>

      <div>


        <nav className="navbar navbar-expand-lg navbar-light"   >
          <div  className=" navsyt nav-color">

            &nbsp;&nbsp;
<div className='logoname' >
<img
              src='logoname.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '120px', width: '160px',  }}
            />

</div>
          

            &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

            <div className='btncenter'  >

              <div >
              <Link className="btn   mx-1 fs-4 changebutton " to = "/"  >
                Trade
              </Link>
             
            
              &nbsp;&nbsp;  &nbsp;&nbsp;
             
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
             

              {/* &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp; */}

    

             

               


            </div>






          
         


            <div>


<div>

  <div style={{ position: 'absolute', right: '100px', top: '59px' }} className="btn   mx-1 fs-5 custom-btn-2 " to="/connectwallet"  onClick={collectBtn}  >Connect wallet</div>


  { cartView? <Modal onClose={()=> setCartView(false)}   >  <Cart/> </Modal>:null }

</div>
<div>

  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

  <select style={{ position: 'absolute', right: '300px', top: '50px' }} className='m-2 h-20 custom-btn-1 fs-5 ' aria-label='dropdown' >
    {Array.from(Array(2), (e, i) => {
      return (
        <option>XRP Ledger</option>
      )
    })}
  </select>
</div>
</div>











            {/* &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; */}

            {/* <div></div> */}

            {/* <div class="flex" style={{ position: 'absolute', right: '620px' }}>
            <form  >

              <input class="form-control me-2 custom-search-bar " type="search" placeholder="Search" aria-label="Search" />
            </form>
            </div> */}

            {/* &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; */}





            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auti mb-2">
                <li className="nav-item">
                </li>
              </ul>
            </div> */}



          </div>
          
        </nav>

        <br></br>  <br></br>


      </div>
    </header>
  )
}
