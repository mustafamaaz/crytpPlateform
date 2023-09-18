import React from 'react';
import './style.css';
import { Input } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


const App = () => {
    return (


        <div className='container-fluid cardheightvh'  >
           


            <div className='row  homecardgrid'>


                <div className="col-md-6  carts cartsbotompading "  style={{ paddingRight: '15px', textAlign: 'center' }}>
                    {/* Card 1 */}
                    <br />
                    No currencies seleted.
                </div>



<div  className='carts'  >



<div className='swapbtn  overflowbtntrade '  >

              <Link  className="btn   mx-1   swap-and-placeorder-btn " to="/swap">Swap Now</Link>
                {/* style={{ position: 'absolute', right: '950px' }} */}
              
                <Link  className="btn   mx-1   swap-and-placeorder-btn " to="/place"> Place  <span className='span-order-adjustment' >    Order </span> </Link>

                {/* style={{ position: 'absolute', right: '830px' }} */}
            </div>

            



                <div class="card    cart_shadow" >


                    <div class="card-inner-body-margin"  >


                        <div class=" fs-4  card-uper-half-body "  >From <br></br>


                            <Dropdown className='cardinnerinputandbtn' >


                            <Input className='fs-3' aria-label='number' placeholder='0.0' style={{ color: 'white' , textDecoration:'none' }} ></Input>

                           




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



<div style={{display:'flex' , flexDirection:'row'}}>
   
      <hr  className='horizontal-lines'  ></hr>
 
    <div>
    <img        className='arrow-img-size'
              src='arrow-of-card.png'// Replace with the actual path to your logo image
              alt="botm"
            //   style={{  height: '30px', width: 'auto',  }}
            />
    </div>
    
    <hr  className='horizontal-lines'  ></hr>
    
</div>




                        <div class=" fs-4" style={{display:'grid' }}  >To <br></br>


                            <Dropdown className='cardinnerinputandbtn'  >

                            <Input className='fs-3' aria-label='number' placeholder='0.0' style={{ color: 'white' }}  ></Input>
                            

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
<div  className='connect-btn-outline-page1  '  >
<div  style={{ }}  className='connect-btn  '  to="/createuser" >Connect Wallet</div>
</div>
{/* </div> */}
                           
                        </div>



                    </div>





                </div>
                </div>






            </div>


            <br />  <br />  <br /> 
        </div>
    );
};

export default App;
