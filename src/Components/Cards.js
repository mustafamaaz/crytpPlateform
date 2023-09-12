import React from 'react';
import './style.css';
import { Input } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';


const App = () => {
    return (


        <div className='container-fluid' >


            <div style={{ display: 'flex' }}>
                <a style={{ position: 'absolute', right: '950px' }} className="btn   mx-1 fs-5 custom-btn-2 " to="/createuser">Swap</a>

                &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

                <a style={{ position: 'absolute', right: '830px' }} className="btn   mx-1 fs-5 custom-btn-2 " to="/createuser">place</a>
            </div>

            <br />  <br />


            <div className='row'>


                <div className="col-md-6  carts" style={{ paddingRight: '15px', textAlign: 'center' }}>
                    {/* Card 1 */}
                    <br />
                    No currencies seleted.
                </div>


                <div class="card  carts  cart_shadow" style={{ width: '50rem', height: '29rem' }}>


                    <ul class="list-group list-group-flush"  >
                        <li class="list-group-item fs-4" style={{ height: '200px' }}  >From <br></br>
                            <Input className='fs-3' aria-label='number' placeholder='0.0' style={{ color: 'white' }} ></Input>

                            &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;


                            <Dropdown>
                                <Dropdown.Toggle style={{ position: 'absolute', right: '100px' }} className=" mx-1 fs-5 custom-btn-2 " variant="success" id="dropdown-basic">
                                    coin
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* <a style={{ position: 'absolute', right: '100px', top: '59px' }} className="btn   mx-1 fs-5 custom-btn-2 " to="/createuser">Select</a> */}
                        </li>




                        <li class="list-group-item fs-4" style={{ height: '200px' }}  >To <br></br>
                            <Input className='fs-3' aria-label='number' placeholder='0.0' style={{ color: 'white' }}  ></Input>

                            &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;



                            <Dropdown>
                                <Dropdown.Toggle style={{ position: 'absolute', right: '100px' }} className=" mx-1 fs-5 custom-btn-2 " variant="success" id="dropdown-basic">
                                    Token
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <br />   <br />   

                            <a style={{ width:'100%'}} className="btn  mx-1 fs-5 connect-btn " to="/createuser">Connect Wallet</a>
                        </li>



                    </ul>
                </div>



            </div>


            <br />  <br />  <br />  <br />  <br />  <br />
        </div>
    );
};

export default App;
