
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
    <header>

      <div>


        <nav className="navbar navbar-expand-lg navbar-light  " >
          <div className="container-fluid  nav-color">

            &nbsp;&nbsp;

            <img
              src='logowithoutname.jpg'// Replace with the actual path to your logo image
              alt="Logo"
              style={{ marginRight: '10px', height: '150px', width: '200px', marginLeft: '80px' }}
            />

            &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

            <div>
              <Link className="btn   mx-1 fs-4 changebutton " to = "/"  >
                Trade
              </Link>
              &nbsp;&nbsp;  &nbsp;&nbsp;
              <Link className="btn   mx-1 fs-4  changebutton "  to= "/pool" >
                 Stake
              </Link>
              &nbsp;&nbsp;  &nbsp;&nbsp;
              <Link className="btn   mx-1 fs-4 changebutton "  to= "/stake" >
              Pool 
              </Link>

              &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;

              <Link className="btn   mx-1 fs-4 changebutton " >


                <svg className='   mx-1  dotbtn  ' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>


              </Link>

            </div>



            &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
            <div></div>
            <form class="d-flex" style={{ position: 'absolute', right: '620px' }} >

              <input class="form-control me-2 custom-search-bar " type="search" placeholder="Search" aria-label="Search" />
              {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
            </form>

            &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

            <div>

              <div style={{ position: 'absolute', right: '100px', top: '59px' }} className="btn   mx-1 fs-5 custom-btn-2 " to="/connectwallet"  onClick={collectBtn}  >Connect wallet</div>


              { cartView? <Modal onClose={()=> setCartView(false)}   >  <Cart/> </Modal>:null }


              &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

              <select style={{ position: 'absolute', right: '300px', top: '50px' }} className='m-2 h-20 custom-btn-1  rounded' aria-label='dropdown' >
                {Array.from(Array(2), (e, i) => {
                  return (
                    <option> dropdown </option>
                  )
                })}
              </select>
            </div>



            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auti mb-2">
                <li className="nav-item">


                </li>


              </ul>
            </div>
          </div>
        </nav>

        <br></br>  <br></br>


      </div>
    </header>
  )
}
