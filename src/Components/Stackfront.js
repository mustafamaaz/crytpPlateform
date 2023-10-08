import React, { useState } from "react";
import "../Components/stackfront.css";


export default function Stackfront() {

  const [colorstack, setcolorstack] = useState(false);
  const [btnstack,setbtnstack] = useState("7D");

  const [colorstacks, setcolorstacks] = useState(false);
  const [btnstacks,setbtnstacks] = useState("USD");

  const handleClick9 = () => {
    setcolorstack(!colorstack);
    setbtnstack("7D");
  };

  const handleClick10 = () => {
    setcolorstack(!colorstack);
    setbtnstack("30D");
  };

  const handleClick11 = () => {
    setcolorstack(!colorstack);
    setbtnstack("90D");
  };

  const handleClick12 = () => {
    setcolorstack(!colorstack);
    setbtnstack("180D");
  };

  const handleClick13 = () => {
    setcolorstacks(!colorstacks);
    setbtnstacks("USD");
  };

  const handleClick14 = () => {
    setcolorstacks(!colorstacks);
    setbtnstacks("JOE");
  };

  return (
    <div   >



<div className="heading-top-margin" > 



<div className="stack-and-btn-flex"   >
  
  <div>
        <div >
          <div className="stake-fonts-syt">Stake</div>
        </div>
        <div className="stake-text-font">Stake your JOE tokens and earn more.</div>
        </div>
        
          <div className="usd-and-joe-btn-outline">

          <button
              onClick={() => handleClick13("USD")}
              className={`usd-1 ${
                btnstacks === "USD" ? "usd-1-active" : " rgb(9, 104, 181)"
              }`}
            >
              USD
            </button>
            <button
              onClick={() => handleClick14("JOE")}
              className={`usd-1 ${
                btnstacks === "JOE" ? "usd-1-active" : "ffffff"
              }`}
            >
              JOE
            </button>
          </div>

          </div>






          <div className="stack-and-btn-flex "   >
  
  <div>
        <div className="" style={{fontSize:'20px'}}>
          <div >Total Staked sJOE</div>
        </div>
        <div className="" style={{fontSize:'30px' , color:'black' }}>$29,251,555</div>
        </div>
        
          <div className="usd-and-joe-btn-outline  uper-4-btn-hide">
            {/* style={{ position: "relative", right: "-400px" }} */}

            <button
              onClick={() => handleClick9("7D")}
              className={`usd ${
                btnstack === "7D" ? "usd-active" : " rgb(9, 104, 181)"
              }`}
            >
              7D
            </button>
            <button
              onClick={() => handleClick10("30D")}
              className={`usd ${
                btnstack === "30D" ? "usd-active" : "ffffff"
              }`}
            >
              30D
            </button>
            <button
              onClick={() => handleClick11("90D")}
              className={`usd ${
                btnstack === "90D" ? "usd-active" : "fffffff"
              }`}
            >
              90D
            </button>
            <button
              onClick={() => handleClick12("180D")}
              className={`usd ${
                btnstack === "180D" ? "usd-active" : "ffffff"
              }`}
            >
              180D
            </button>
          </div>



          </div>




</div>


{/* ---------------------card------------------- */}



<div style={{display:'grid' }} >
  
  



<div className="all-cards-outer-body-adjustment"  >



{/* card 1 */}



<div className="card1-outer-body-whole" >
<div className=" card-1-body-spacing " >





<div style={{marginBottom:'25px'}} >
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div>
<img       className="card-img-sizing-multiple"
              src='cc.png'// Replace with the actual path to your logo image
              alt="Logo"
             
            />
</div>
<div className="in-card-earn-btn-outer"  > 
  <div className="card-earn-btn-inner">
  Earn USD Stablecoins
  </div>
</div>
</div>
</div>


  <div className="in-second-row-card" style={{marginBottom:'12px'}} >
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-fields-font-sizes" >
  Total Staked (USD)
</div>
<div className="cards-fields-font-sizes" > 
  Your Stake (USD)
</div>
</div>

<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-field-numbwe-color" >
  $394,989,00
</div>
<div className="cards-field-numbwe-color" > 
  $0
</div>
</div> 
</div>



<div  className="in-second-row-card" style={{marginBottom:'12px' }} >
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div  className="cards-fields-font-sizes">
  ARF 30D(USD)
</div>
<div className="cards-fields-font-sizes" > 
  deposit Fee
</div>
</div>
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-field-numbwe-color" >
  $394,989,00
</div>
<div className="cards-field-numbwe-color" > 
  $0
</div>
</div> 
</div>



</div>
</div>

{/* ========================card 2 =================== */}


<div className="card1-outer-body-whole" >
<div className=" card-1-body-spacing " >


<div style={{marginBottom:'25px'}} >
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div>
<img          className="card-img-sizing-multiple"
              src='cc.png'// Replace with the actual path to your logo image
              alt="Logo"
             
            />
</div>
<div className="in-card-earn-btn-outer"  > 
  <div className="card-earn-btn-inner">
  Earn USD Stablecoins
  </div>
</div>
</div>
</div>


  <div className="in-second-row-card" style={{marginBottom:'12px'}} >
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-fields-font-sizes">
  Total Staked (USD)
</div>
<div className="cards-fields-font-sizes" > 
  Your Stake (USD)
</div>
</div>
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-field-numbwe-color" >
  $394,989,00
</div>
<div className="cards-field-numbwe-color" > 
  $0
</div>
</div> 
</div>

<div  className="in-second-row-card" style={{marginBottom:'12px' }} >
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-fields-font-sizes">
  ARF 30D(USD)
</div>
<div className="cards-fields-font-sizes" > 
  deposit Fee
</div>
</div>
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-field-numbwe-color" >
  $394,989,00
</div>
<div className="cards-field-numbwe-color" > 
  $0
</div>
</div> 
</div>

</div>
</div>
</div>
{/* ===============2nd row============================== */}
<div className="all-cards-outer-body-adjustment"  >
{/* card 1 */}



<div className="card1-outer-body-whole" >
<div className=" card-1-body-spacing " >





<div style={{marginBottom:'25px'}} >
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div>
<img       className="card-img-sizing-multiple"
              src='cc.png'// Replace with the actual path to your logo image
              alt="Logo"
             
            />
</div>
<div className="in-card-earn-btn-outer"  > 
  <div className="card-earn-btn-inner">
  Earn USD Stablecoins
  </div>
</div>
</div>
</div>


  <div className="in-second-row-card" style={{marginBottom:'12px'}} >
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-fields-font-sizes" >
  Total Staked (USD)
</div>
<div className="cards-fields-font-sizes" > 
  Your Stake (USD)
</div>
</div>

<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-field-numbwe-color" >
  $394,989,00
</div>
<div className="cards-field-numbwe-color" > 
  $0
</div>
</div> 
</div>



<div  className="in-second-row-card" style={{marginBottom:'12px' }} >
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div  className="cards-fields-font-sizes">
  ARF 30D(USD)
</div>
<div className="cards-fields-font-sizes" > 
  deposit Fee
</div>
</div>
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-field-numbwe-color" >
  $394,989,00
</div>
<div className="cards-field-numbwe-color" > 
  $0
</div>
</div> 
</div>



</div>
</div>

{/* ========================card 2 =================== */}


<div className="card1-outer-body-whole" >
<div className=" card-1-body-spacing " >


<div style={{marginBottom:'25px'}} >
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div>
<img          className="card-img-sizing-multiple"
              src='cc.png'// Replace with the actual path to your logo image
              alt="Logo"
             
            />
</div>
<div className="in-card-earn-btn-outer"  > 
  <div className="card-earn-btn-inner">
  Earn USD Stablecoins
  </div>
</div>
</div>
</div>


  <div className="in-second-row-card" style={{marginBottom:'12px'}} >
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-fields-font-sizes">
  Total Staked (USD)
</div>
<div className="cards-fields-font-sizes" > 
  Your Stake (USD)
</div>
</div>
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-field-numbwe-color" >
  $394,989,00
</div>
<div className="cards-field-numbwe-color" > 
  $0
</div>
</div> 
</div>

<div  className="in-second-row-card" style={{marginBottom:'12px' }} >
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-fields-font-sizes">
  ARF 30D(USD)
</div>
<div className="cards-fields-font-sizes" > 
  deposit Fee
</div>
</div>
<div style={{display:'flex' , justifyContent:'space-between'}}  >
<div className="cards-field-numbwe-color" >
  $394,989,00
</div>
<div className="cards-field-numbwe-color" > 
  $0
</div>
</div> 
</div>


</div>
</div>
</div>
</div>







      
</div>
    
  );
}