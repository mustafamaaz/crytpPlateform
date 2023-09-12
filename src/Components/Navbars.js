// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import InputBase from '@mui/material/InputBase';

// import ButtonGroup  from '@mui/material/ButtonGroup';




// import './style.css';


// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#000', // Set the primary color to black
//         },
//     },
// });


// const Navbar = () => {
//     return (
//         <ThemeProvider theme={theme}>
//             <AppBar position="Static">
//                 <Toolbar>
//                 {/* style={{ display: 'flex', justifyContent: 'space-between' }} */}



//                     {/* <img
//                         src='logowithoutname.jpg'// Replace with the actual path to your logo image
//                         alt="Logo"
//                         style={{ marginRight: '10px', height: '150px', width: '200px', marginLeft:'80px' }}
//                     /> */}
//                     {/* <div style={{ marginRight: '30px', marginLeft:'100px' }}></div>      */}
//                     {/* 30px space from left */}




//         <ButtonGroup variant="outlined">
//         <Button className="customButton"  style={{ marginRight: '60px' }}  >Button 1</Button>
//       <Button className="customButton" style={{ marginRight: '60px' }}  >Button 2</Button>
//       <Button className="customButton"  style={{ marginRight: '60px' }}  >Button 3</Button>
//             </ButtonGroup>  


//                {/* <div style={{ flexGrow: 1 }}></div> Space to push the search bar to the center */}
//                     <div   style={{ display: 'flex' }}>
//                         {/* <div style={{ marginRight: '10px' }}>
//                             <SearchIcon />
//                         </div> */}

//         {/* <div className="searchBar">

//         <InputBase
//           placeholder="Search..."
//           inputProps={{ 'aria-label': 'search' }}
//           fullWidth // Make the input take up all available width
//         />
//       </div>
//                    */}
//                     {/* <Button className="customButton"   style={{ marginLeft: '60px'  }}  >Button 4</Button>
//                     <Button className="customButton"   style={{ marginLeft: '60px' }}  >Button 5</Button> */}
//                     </div>

//                 </Toolbar>
//             </AppBar>
//         </ThemeProvider>
//     );
// };

// export default Navbar;





// rfc is snappit for creating below this model


// import Badge from 'react-bootstrap/Badge';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import './style.css';



export default function Navbar() {

 


  return (
    <header>
    
    <div> 
       

      <nav  className="navbar navbar-expand-lg navbar-light  nav-color" >
        <div className="container-fluid">

        &nbsp;&nbsp;

              <img
                        src='logowithoutname.jpg'// Replace with the actual path to your logo image
                         alt="Logo"
                         style={{ marginRight: '10px', height: '150px', width: '200px', marginLeft:'80px' }}
                     /> 

&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

<div>
  <a className="btn   mx-1 fs-4 changebutton " >
    Trade
  </a>
  &nbsp;&nbsp;  &nbsp;&nbsp;
  <a className="btn   mx-1 fs-4  changebutton " >
    Pool
  </a>
  &nbsp;&nbsp;  &nbsp;&nbsp;
  <a className="btn   mx-1 fs-4 changebutton " >
    Stake
  </a>

  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;

  <a className="btn   mx-1 fs-4 changebutton " >
  

  <svg className='   mx-1  dotbtn  '  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>


  </a>

</div>



&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
   <div></div>
            <form class="d-flex" style={{ position:'absolute' , right:'620px'}} >
                
        <input class="form-control me-2 custom-search-bar " type="search" placeholder="Search" aria-label="Search"/>
        {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
      </form>

      &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

      <div>

      <a style={{ position:'absolute' , right:'100px',top:'59px'}} className="btn   mx-1 fs-5 custom-btn-2 " to="/createuser">Connect wallet</a>



      &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;

<select style={{ position:'absolute' , right:'300px',top:'50px'}} className='m-2 h-20 custom-btn-1  rounded' aria-label='dropdown' >
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
