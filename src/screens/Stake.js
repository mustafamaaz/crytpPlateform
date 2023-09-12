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

import '../Components/style.css';



export default function Stake() {
    return (

        <div>
            <Navbar />



            <br></br>

<Poolfont/>

<br></br>



<div className='col-auto' style={{float:'left' , marginLeft:'10%'}}>
<div className="button-container" >
            <div>
            <button className="but-2 ">Pools</button>
            </div>

            <div>
            <button className="but-2  ">Auto Pools</button>
            </div>

            <div>
            <button className="but-2  ">My Pools</button>
            </div>
             
            
            </div>
         

</div>
            




 



<div  style={{ marginLeft: '10%' , marginRight:'10%'   }}>
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
            <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5' , fontSize : 'large'}}>DEPTH</TableCell>
            <TableCell sx={{ fontWeight: 'bold' ,color:'#b5b5b5', fontSize : 'large'}}>DEPTH</TableCell>
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



            <Footer></Footer>
        </div>
    )
}
