import React from "react";
import "../Components/Pool.css";

export default function Poolfont() {
  return (
    <div>
      <div className="tp">
        <div className="fs-1">Pool</div>
        <div className="liquid">provide liquidity and earn fees.</div>
      </div>
      <div className="Whole">
        <div className="Left_TVL">
          <div className="p2">
            <p>TVL(Total Value Locked)</p>
          </div>
          <h2>
            <div className="hh">
              <b>$43,305,552</b>
            </div>
          </h2>
          <div
            className="button-container"
            style={{ position: "relative", left: "-570px" }}
          >
            <div className="outer-outline">
              <button className="but-1">7D</button>
              <button className="but-1">30D</button>
              <button className="but-1">90D</button>
              <button className="but-1">180D</button>
            </div>
          </div>
        </div>
        <div className="Right_Vol">
          <div className="text">
            <div className="text2">
              <p>Volume (1D)</p>
            </div>
          </div>
          <h2>
            <div className="val2">
              <b>$12,048,024</b>
            </div>
          </h2>
        </div>
        <div className="button-containers">
          <div className="outer-outline">
            <button className="s1">7D</button>
            <button className="s1">30D</button>
            <button className="s1">90D</button>
            <button className="s1">180D</button>
          </div>
        </div>

        <div className="Image_graph">
          <img src="tt.png" alt="graph" />
        </div>
      </div>
    </div>
  );
}
