import {React } from 'react'
import './style.css';
import { Link,useNavigate } from 'react-router-dom'

export default function Bottombar() {

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
              style={{  height: '30px', width: 'auto',  }}
            />

            </div>

            <div  className='botomsicons' onClick={randerpage2} >  

<img
              src='graph.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '30px', width: 'auto',  }}
            />

            </div>


            <div  className='botomsicons' onClick={randerpage3} >
<img
              src='transaction.png'// Replace with the actual path to your logo image
              alt="Logo"
              style={{  height: '30px', width: 'auto',  }}
            />
</div>




  </div>


    
  )
}
