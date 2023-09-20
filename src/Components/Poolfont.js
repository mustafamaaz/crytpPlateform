import React, { useState } from "react";
import "../Components/Pool.css";

export default function Poolfont() {
  const [changecolor, setchangecolor] = useState(false);
  const [activeButton, setActiveButton] = useState("7D");

  const handleClick = () => {
    setchangecolor(!changecolor);
    setActiveButton("7D");
  };

  const handleClick2 = () => {
    setchangecolor(!changecolor);
    setActiveButton("30D");
  };

  const handleClick3 = () => {
    setchangecolor(!changecolor);
    setActiveButton("90D");
  };

  const handleClick4 = () => {
    setchangecolor(!changecolor);
    setActiveButton("180D");
  };

  const [changecolors, setchangecolors] = useState(false);
  const [activeButtons, setActiveButtons] = useState("7D");

  const handleClick5 = () => {
    setchangecolors(!changecolors);
    setActiveButtons("7D");
  };

  const handleClick6 = () => {
    setchangecolors(!changecolors);
    setActiveButtons("30D");
  };

  const handleClick7 = () => {
    setchangecolors(!changecolors);
    setActiveButtons("90D");
  };

  const handleClick8 = () => {
    setchangecolors(!changecolors);
    setActiveButtons("180D");
  };

  return (
    <div className="pool_whole">
      <div className="Row_1">
        <div>
          <div className="poolstyling-by-maaz">Pool</div>

          <div className="pool-heading-paragraph">
            Provide liquidity and earn fees.
          </div>
        </div>

        <select
          className="m-2 h-20 pool-btn-vs-adjust-width fs-5 "
          aria-label="dropdown"
        >
          {Array.from(Array(2), (e, i) => {
            return <option>V2 Pools</option>;
          })}
        </select>
      </div>

      <div className="Data_row">
        <div className="left_row">
          <p style={{ color: "#c9d6cd" }}>TVL (Total Value Locked)</p>
          <h1 style={{ color: "black" }}>$21,084,418</h1>
        </div>

        <div className="btn6_outline">
          <div className="btn_pool">
            <button
              onClick={() => handleClick("7D")}
              className={`btn-6 ${
                activeButton === "7D" ? "btn-6-active" : " rgb(9, 104, 181)"
              }`}
            >
              7D
            </button>
            <button
              onClick={() => handleClick2("30D")}
              className={`btn-6 ${
                activeButton === "30D" ? "btn-6-active" : "ffffff"
              }`}
            >
              30D
            </button>
            <button
              onClick={() => handleClick3("90D")}
              className={`btn-6 ${
                activeButton === "90D" ? "btn-6-active" : "fffffff"
              }`}
            >
              90D
            </button>
            <button
              onClick={() => handleClick4("180D")}
              className={`btn-6 ${
                activeButton === "180D" ? "btn-6-active" : "ffffff"
              }`}
            >
              180D
            </button>
          </div>
        </div>

        <div className="wrapper_pool">
          <p style={{ color: "#c9d6cd" }}>Volume (1D)</p>
          <h1 style={{ color: "black" }}>$8,418,928</h1>
        </div>
        <div className="btn7_outline">
          <div className="btn_pool2">
            <button
              onClick={() => handleClick5("7D")}
              className={`btn-7 ${
                activeButtons === "7D" ? "btn-7-active" : " rgb(9, 104, 181)"
              }`}
            >
              7D
            </button>
            <button
              onClick={() => handleClick6("30D")}
              className={`btn-7 ${
                activeButtons === "30D" ? "btn-7-active" : "ffffff"
              }`}
            >
              30D
            </button>
            <button
              onClick={() => handleClick7("90D")}
              className={`btn-7 ${
                activeButtons === "90D" ? "btn-7-active" : "fffffff"
              }`}
            >
              90D
            </button>
            <button
              onClick={() => handleClick8("180D")}
              className={`btn-7 ${
                activeButtons === "180D" ? "btn-7-active" : "ffffff"
              }`}
            >
              180D
            </button>
          </div>
        </div>
      </div>
      {/* <div className="graphy">
        <img src="tt.png" alt="graph"></img>
      </div> */}
    </div>
  );
}