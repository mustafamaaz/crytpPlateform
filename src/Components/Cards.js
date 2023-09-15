import React from 'react';
import './style.css';
import { Input } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


const App = () => {
    return (


        <div className='container-fluid cardheightvh' style={{paddingTop:'25px'}} >


       

            <br />  <br />


            <div className='row  homecardgrid'>


                <div className="col-md-6  carts" style={{ paddingRight: '15px', textAlign: 'center' }}>
                    {/* Card 1 */}
                    <br />
                    No currencies seleted.
                </div>



<div  className='carts'  >



<div className='swapbtn  overflowbtntrade ' >
                <Link  className="btn   mx-1 fs-5 custom-btn-2 " to="/swap">Swap</Link>
                {/* style={{ position: 'absolute', right: '950px' }} */}
                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

                <Link  className="btn   mx-1 fs-5 custom-btn-2 " to="/place">Place Order</Link>
                {/* style={{ position: 'absolute', right: '830px' }} */}
            </div   >

                <div class="card    cart_shadow" >


                    <ul class="list-group list-group-flush"  >
                        <li class="list-group-item fs-4" style={{ height: '200px' }}  >From <br></br>


                            <Dropdown className='cardinnerinputandbtn' >


                            <Input className='fs-3' aria-label='number' placeholder='0.0' style={{ color: 'white' }} ></Input>

                            &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;




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
                        </li>




                        <li class="list-group-item fs-4" style={{display:'grid' }}  >To <br></br>


                            <Dropdown className='cardinnerinputandbtn'  >

                            <Input className='fs-3' aria-label='number' placeholder='0.0' style={{ color: 'white' }}  ></Input>
                             &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;

                                <Dropdown.Toggle className=" mx-1 fs-5 custom-btn-2 " variant="success" id="dropdown-basic">
                                    USD
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <br />   <br />


{/* <div  style={{ width: '70%' }}  className='btn  mx-1 fs-5   connectwalletbtnout   wallettradebtn overflowbtntradecollect ' > */}
<div >
<div  style={{ width: '70%' }}  className='connect-btn  '  to="/createuser">Connect Wallet</div>
</div>
{/* </div> */}
                           
                        </li>



                    </ul>
                </div>


                </div>






            </div>


            <br />  <br />  <br />  <br />  <br />  <br />
        </div>
    );
};

export default App;
