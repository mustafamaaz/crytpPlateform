import  {React, useState }  from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './style.css';
import Modal from '../Model';
import Cart from '../screens/Cart';
import MobileNav from '../screens/MobileNav';
import ModalNav from '../ModalNav'
export default function Bottombar() {




  function  collectBtn (){
    setCartView(true)
  }


  function  navViewCheck (){
    setnavView(true)
  }




const [cartView,setCartView] = useState(false);
const [navView,setnavView] = useState(false);


  let navigate = useNavigate()

  function randerpage1 (){

    navigate('/')

  }

  function randerpage2 (){

    navigate('/pool')
  }



  function randerpage3 (){

    navigate('/stake')
  }




  return (


    <div class="bottom-bar">

      
   
  <div className='botomsicons' onClick={randerpage1}  >
<img     
              src='buy.png'// Replace with the actual path to your logo image
              alt="botm"
              style={{  height: '26px', width: 'auto',  }}
            />

            </div>


            <div  className='botomsicons' onClick={randerpage3} >
<img
              src='transaction.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '26px', width: 'auto',  }}
            />
</div>






            <div  className='botomsicons'  >  

<img            onClick={collectBtn} 
              src='graph.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '26px', width: 'auto',  }}
            />

{cartView? (document.body.style.overflow = 'hidden' , console.log("card is opened"))  :  (document.body.style.overflow = '' , console.log("card is closed"))  }
  { cartView? <Modal onClose={()=> setCartView(false)}   >  <Cart/> </Modal>:null }
            </div>




<div  className='botomsicons'  >
<img              onClick={navViewCheck} 
              src='menu.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '26px', width: 'auto',  }}
            />

{navView? (document.body.style.overflow = 'hidden' , console.log("card is opened"))  :  (document.body.style.overflow = '' , console.log("card is closed"))  }
  { navView? <ModalNav onClose={()=> setnavView(false)}   >  <MobileNav/> </ModalNav>:null }


</div>




  </div>


    
  )
}
