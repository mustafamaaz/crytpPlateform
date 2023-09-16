import React from "react";
import "../Components/stackfront.css";

export default function Stackfront() {
  return (
    <div className="secondpagemargin" >
      <div className="ppp">
        <div className="fs-2">
          <div className="yu">Stake</div>
        </div>
        <div className="liquid">Stake your JOE tokens and earn more.</div>

        <div className="button-container">
          <div className="outer-outline">
            {/* style={{ position: "relative", right: "-400px" }} */}

            <button className="but-1">USD</button>
            <button className="but-1">JOE</button>
          </div>

          <div className="think">
            <div className="outer-outline">
              <button className="but-1">7D</button>
              <button className="but-1">30D</button>
              <button className="but-1">90D</button>
              <button className="but-1">180D</button>
            </div>
          </div>
        </div>
      </div>

      <div className="data">
        <div className="blah">
          <p>Total Staked sJOE</p>
        </div>
        <div className="sb">$29,251,555</div>
      </div>

      <div className="dd">
        <div className="button-container">
          <div>
            {/* style={{ position: "relative", right: "-400px", top: "50px" }} */}
          </div>
        </div>
      </div>

      <div>
        <img className="imgdecoration" src="kk.png" alt="Graph"></img>
      </div>

      <div className="container-card-trade">
        <div className="content-section">
          <div className="card">
            <div className="edit">
              <div className="r1">
                <img src="cc.png" alt="logo"></img>
                <p>sJOE</p>
                <div className="java">
                  <a href="/">Earn USD Stablecoins</a>
                </div>
              </div>
              <div className="pso">
                <div className="steel">
                  <i>Total Stacked (USD) </i>
                  <p>$9,416,512</p>
                </div>
                <div className="chachu">
                  <i>Your Stake(USD) </i>
                  <p>$0.0</p>
                </div>
              </div>
              <div className="total">
                <div className="shah">
                  <i>APR (30D) </i>
                  <p>1.71%</p>
                </div>
                <div className="mus">
                  <i>Deposit fee(USD) </i>
                  <p>$0.0</p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}