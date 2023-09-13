import React from "react";
import "../Components/stackfront.css";

export default function Stackfront() {
  return (
    <div>
      <div className="ppp">
        <div className="fs-2">
          <b>Stake</b>
        </div>
        <div className="liquid">Stake your JOE tokens and earn more.</div>
      </div>
      <div
        className="button-container"
        style={{ position: "relative", top: "-60px" }}
      >
        <div style={{ position: "relative", right: "-400px" }}>
          <div className="outer-outline">
            <button className="but-1">USD</button>
            <button className="but-1">JOE</button>
          </div>
        </div>
      </div>
      <div className="data">
        <div className="blah">
          <p>Total Staked sJOE</p>
        </div>
        <div className="sb">
          <div className="fs-3">29,251,555 JOE</div>
        </div>
      </div>
      <div className="button-container">
        <div style={{ position: "relative", right: "-400px", top: "50px" }}>
          <div className="outer-outline">
            <button className="but-1">7D</button>
            <button className="but-1">30D</button>
            <button className="but-1">90D</button>
            <button className="but-1">180D</button>
          </div>
        </div>
      </div>
      <div className="ch">
        <img
          src="kk.png"
          alt="Graph"
          style={{ position: "relative", right: "-150px" }}
        ></img>
      </div>

      <div className="ty">
        <div
          className="card "
          style={{ width: "42rem", height: "15rem", borderRadius: "20px" }}
        >
          <div className="mm">
            <div className="im">
              <img src="cc.png" alt="logo"></img>
            </div>
            <div className="txt">
              <p>sJOE</p>
            </div>
          </div>
          <div className="text2">
            <div style={{ position: "relative", right: "-530px", top: "-6px" }}>
              <a href="/">Earn USD Stablecoins</a>
            </div>
          </div>
          <div className="gg">
            <div></div>

            <div
              style={{ color: "#c9ccd1", position: "absolute", top: "70px" }}
            >
              <p>
                {" "}
                <i>Total Stacked (USD) </i>{" "}
              </p>{" "}
            </div>
          </div>

          <div
            className="is fs-4"
            style={{ position: "relative", bottom: "-15px", right: "-25px" }}
          >
            <p>$9,416,512</p>
          </div>

          <div
            style={{
              color: "#c9ccd1",
              position: "absolute",
              left: "450px",
              top: "68px",
              display: "flex",
            }}
          >
            <p>
              {" "}
              <i>Your Stake(USD) </i>{" "}
            </p>{" "}
          </div>

          <div
            className="is fs-4"
            style={{
              position: "absolute",
              left: "470px",
              top: "110px",
              display: "flex",
            }}
          >
            <p>$0.0</p>
          </div>

          <br />
          <div className="row2">
            <div
              style={{ color: "#c9ccd1", position: "relative", right: "-25px" }}
            >
              <p>
                {" "}
                <i>APR (30D) </i>
              </p>
            </div>
            <div className="is fs-4">
              <div style={{ position: "relative", right: "-25px" }}>
                <p>1.71%</p>
              </div>
            </div>
          </div>
          <div
            style={{
              color: "#c9ccd1",
              position: "absolute",
              left: "450px",
              top: "150px",
              display: "flex",
            }}
          >
            <p>
              {" "}
              <i>Deposit fee(USD) </i>{" "}
            </p>{" "}
          </div>

          <div
            className="is fs-4"
            style={{
              position: "absolute",
              left: "470px",
              top: "195px",
              display: "flex",
            }}
          >
            <p>0%</p>
          </div>
        </div>
        <div cl></div>
      </div>
    </div>
  );
}
