import React from "react";
import "../Components/Pool.css";

export default function Poolfont() {
  return (


    <div className="pool_whole">



      <div className="Row_1">

<div>
        <div className="poolstyling-by-maaz">Pool</div>
            
        <div className="pool-heading-paragraph" >Provide liquidity and earn fees.</div>
       
        </div>


  <select  className='m-2 h-20 pool-btn-vs-adjust-width fs-5 ' aria-label='dropdown' >
    {Array.from(Array(2), (e, i) => {
      return (
        <option>V2 Pools</option>
      )
    })}
  </select>
      </div>

      <div className="Data_row">
        <div className="left_row">
          <p style={{color:'#c9d6cd'}} >TVL (Total Value Locked)</p>
          <h1 style={{color:'black'}} >$21,084,418</h1>
        </div>

        <div className="btn6_outline">
          <div className="btn_pool">
            <button className="btn-6">7D</button>
            <button className="btn-6">30D</button>
            <button className="btn-6">90D</button>
            <button className="btn-6">180D</button>
          </div>
        </div>

        <div className="wrapper_pool">
          <p  style={{color:'#c9d6cd'}} >Volume (1D)</p>
          <h1 style={{color:'black'}} >$8,418,928</h1>
        </div>
        <div className="btn7_outline">
          <div className="btn_pool2">
            <button className="btn-7">7D</button>
            <button className="btn-7">30D</button>
            <button className="btn-7">90D</button>
            <button className="btn-7">180D</button>
          </div>
        </div>
      </div>
      {/* <div className="graphy">
        <img src="tt.png" alt="graph"></img>
      </div> */}
    </div>
  );
}
