import React from 'react'
import Navbar from '../Components/Navbars'
import Footer from '../Components/Footer'

import '../Components/Pool.css'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button
  } from '@mui/material';
import Poolfont from '../Components/Poolfont';



// import '../Components/style.css';
import Bottombar from '../Components/Bottombar';
import Logotag from '../Components/Logotag';



export default function Stake() {
    return (

        <div className='changebackgroundcolor' >
         
<div className='footerbackgroundcolor'><Navbar/></div>
<div><Bottombar/></div>
<div> <Logotag/> </div>



            <br></br>

<div >
<Poolfont/>
</div>


<br></br>


<div style={{marginTop:'20px' , marginBottom:'20px'}}>

<div style={{display:'flex' ,flexDirection:'column' }} >

<div className="but-of-uper-table-outline" style={{boxShadow:'5px 10px 9px black'}} >

            <div>
            <button  className="but-of-uper-table ">Pools</button>
            </div>

            <div>
            <button className="but-of-uper-table ">Auto Pools</button>
            </div>

            <div>
            <button className="but-of-uper-table">My Pools</button>
            </div>
            </div>



            <div  className='table-custom-size' style={{ marginLeft: '10%' , marginRight:'10%' , marginTop:'10px'  }}>
            <TableContainer   >

            <Table sx={{ minWidth: 650 }} aria-label='simple table'>

            <TableHead>
            <TableRow >
            <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5' , fontSize : 'large'}}>POOL NAME</TableCell>
            <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5', fontSize : 'large' }}>
            <Button size='medium' variant='contained'> VOLUME</Button>
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5' , fontSize : 'large'}}>
            <Button size='medium' variant='contained'>LIQUIDITY </Button>
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5' , fontSize : 'large'}}>+2% DEPTH</TableCell>
            <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5', fontSize : 'large'}}>-2% DEPTH</TableCell>
            <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5', fontSize : 'large'}}>
            <Button size='medium' variant='contained'>FEES </Button>
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5', fontSize : 'large'}}>
            <Button size='medium' variant='contained'>ARP </Button>
            </TableCell>

          </TableRow>
        </TableHead>

<br/> <br/>

        <TableBody>


        {Array.from(Array(6), (e, i) => {
                                    return (
                                        <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5' , fontSize : 'large'}}  >ETH-USD.e</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5' , fontSize : 'large'}} >$12,344,00</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5' , fontSize : 'large'}}> $7,534,34 </TableCell>
                                          <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5' , fontSize : 'large'}}>$34,003,4</TableCell>
                                          <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5' , fontSize : 'large'}}>$7,534,34 </TableCell>
                                          <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5' , fontSize : 'large'}}>$39,19 </TableCell>
                                          <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5' , fontSize : 'large'}}>117.83%</TableCell>
                                      </TableRow>

                                    )
                                })}


        </TableBody>


      </Table>
    </TableContainer>



    </div>






            














</div>
            
</div>



 





            <Footer></Footer>
        </div>
    )
}
