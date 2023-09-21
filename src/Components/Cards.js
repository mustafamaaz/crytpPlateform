import { React, useState } from 'react';
import './style.css';
import { Input, Button } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

import Modal from '../Model';
import Cart from '../screens/Cart';

const App = () => {


    function collectBtn() {

        setCartView(true)
    }

    const [cartView, setCartView] = useState(false);
    const [currentcard,setcurrentcard] = useState(1);

    function  switchCard (){
            setcurrentcard(currentcard === 1 ? 2 : 1)
    }





    return (


        <div className='container-fluid cardheightvh'  >



            <div className='row  homecardgrid'>


                <div className="col-md-6  carts cartsbotompading " style={{ paddingRight: '15px', textAlign: 'center' }}>
                    {/* Card 1 */}
                    <br />
                    No currencies seleted.
                </div>



                <div className='carts'  >



                    <div className='swapbtn  overflowbtntrade '  >

                        <Link className="btn   mx-1   swap-and-placeorder-btn "  onClick={()=>{ setcurrentcard(1)}} >Swap   <span className='span-order-adjustment' >    Now </span>  </Link>
                     

                        <Link className="btn   mx-1   swap-and-placeorder-btn "   onClick={()=>{ setcurrentcard(2)}} > Place  <span className='span-order-adjustment' >    Order </span> </Link>

                    </div>

{
          currentcard === 1 ? (




        <div class="card    cart_shadow" >


        <div class="card-inner-body-margin"  >


            <div class=" fs-4  card-uper-half-body "  >From <br></br>


                <Dropdown className='cardinnerinputandbtn' >


                    <Input className='fs-3' aria-label='number' placeholder='0.0' style={{ color: 'black', textDecoration: 'none' , border:'none' , outline:'none',textUnderlineOffset:'none' }} ></Input>






                    <Dropdown.Toggle className=" mx-1 fs-5 custom-btn-2 " variant="success" id="dropdown-basic">
                        XRP
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* <a style={{ position: 'absolute', right: '100px', top: '59px' }} className="btn   mx-1 fs-5 custom-btn-2 " to="/createuser">Select</a> */}
            </div>



            <div style={{ display: 'flex', flexDirection: 'row' }}>

               <hr  className='horizontal-lines' ></hr> 

                <div className='arrow-hover' >
                    <img className='arrow-img-size'
                        src='arrow-of-card.png'// Replace with the actual path to your logo image
                        alt="botm"
                    />
                </div>
                <hr className='horizontal-lines' ></hr> 

            </div>




            <div class=" fs-4" style={{ display: 'grid' }}  >To <br></br>


                <Dropdown className='cardinnerinputandbtn'  >

                    <Input className='fs-3' aria-label='number' placeholder='0.0' style={{ color: 'black' }}  ></Input>


                    <Dropdown.Toggle className=" mx-1 fs-5 custom-btn-2 " variant="success" id="dropdown-basic">
                        USD
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <br />


                {/* <div  style={{ width: '70%' }}  className='btn  mx-1 fs-5   connectwalletbtnout   wallettradebtn overflowbtntradecollect ' > */}
                <div className='connect-btn-outline-page1'>
                    <div className='connect-btn  ' to="/btn" onClick={collectBtn} >Connect Wallet</div>

                    {cartView ? (document.body.style.overflow = 'hidden', console.log("card is opened")) : (document.body.style.overflow = '', console.log("card is closed"))}
                    {cartView ? <Modal isOpen={cartView} onClose={() => { setCartView(false); console.log("set false") }}   >  <Cart /> </Modal> : null}
                </div>
                {/* </div> */}

            </div>
        </div>
    </div>










    ) : (





        <div class="card    cart_shadow" >


        <div class="card-inner-body-margin"  >


            <div class=" fs-4  card-uper-half-body "  >You Pay <br></br>


                <Dropdown className='cardinnerinputandbtn' >


                    <Input className='fs-3' aria-label='number' placeholder='0.0' style={{ color: 'black', textDecoration: 'none' }} ></Input>






                    <Dropdown.Toggle className=" mx-1 fs-5 custom-btn-2 " variant="success" id="dropdown-basic">
                        XRP
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* <a style={{ position: 'absolute', right: '100px', top: '59px' }} className="btn   mx-1 fs-5 custom-btn-2 " to="/createuser">Select</a> */}
            </div>



            <div style={{ display: 'flex', flexDirection: 'row' }}>

                <hr className='horizontal-lines'  ></hr>

                <div className='arrow-hover' >
                    <img className='arrow-img-size'
                        src='arrow-of-card.png'// Replace with the actual path to your logo image
                        alt="botm"
                    />
                </div>

                <hr className='horizontal-lines'  ></hr>

            </div>




            <div class=" fs-4" style={{ display: 'grid' }}  >You Receive (ETH) <br></br>


                <Dropdown className='cardinnerinputandbtn'  >

                    <Input className='fs-3' aria-label='number' placeholder='0.0' style={{ color: 'black' }}  ></Input>


                    <Dropdown.Toggle className=" mx-1 fs-5 custom-btn-2 " variant="success" id="dropdown-basic">
                        USD
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <br />


                {/* <div  style={{ width: '70%' }}  className='btn  mx-1 fs-5   connectwalletbtnout   wallettradebtn overflowbtntradecollect ' > */}
                
                
                
                {/* <div className='connect-btn-outline-page1  '  >
                    <div className='connect-btn  ' to="/btn" onClick={collectBtn} >Connect Wallet</div>

                    {cartView ? (document.body.style.overflow = 'hidden', console.log("card is opened")) : (document.body.style.overflow = '', console.log("card is closed"))}
                    {cartView ? <Modal isOpen={cartView} onClose={() => { setCartView(false); console.log("set false") }}   >  <Cart /> </Modal> : null}
                </div> */}



                {/* </div> */}

            </div>







            <div class=" fs-4" style={{ display: 'grid' }}  >Price <br></br>




    <Input className='fs-3' aria-label='number' placeholder='0.0' style={{ color: 'black' }}  ></Input>



<br />


{/* <div  style={{ width: '70%' }}  className='btn  mx-1 fs-5   connectwalletbtnout   wallettradebtn overflowbtntradecollect ' > */}
<div className='connect-btn-outline-page1  '  >
    <div className='connect-btn  ' to="/btn" onClick={collectBtn} >Connect Wallet</div>

    {cartView ? (document.body.style.overflow = 'hidden', console.log("card is opened")) : (document.body.style.overflow = '', console.log("card is closed"))}
    {cartView ? <Modal isOpen={cartView} onClose={() => { setCartView(false); console.log("set false") }}   >  <Cart /> </Modal> : null}
</div>
{/* </div> */}

</div>















        </div>
    </div>







    )


}































































                </div>






            </div>


            <br />  <br />  <br />
        </div>
    );
};

export default App;
