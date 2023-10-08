import { React, useState } from "react";
// import  from 'react-router-dom'
import { Link, useNavigate } from "react-router-dom";
import "./lend_navbar.css";

import Modal from "../Model";
import Cart from "../screens/Cart";

export default function Navbar_lend() {
  function collectBtn() {
    localStorage.setItem("code", "connect");
    setCartView(true);
  }

  let navigate = useNavigate();

  const [cartView, setCartView] = useState(false);

  return (
    <div className="hiddennav_lend">
      <nav className="navbar-expand-lg">
        <div className=" navsyt nav-color">
          <div className="logoname_lend">
            <img
              src="logofullname.png" // Replace with the actual path to your logo image
              alt="Logo"
              style={{ height: "80px", width: "auto" }}
            />
          </div>

          <div className="btncenter_lend">
            <div className="beachkybtn_lend">
              <Link className="btn   mx-1 fs-4 changebutton " to="/">
                Trade
              </Link>
              <Link className="btn   mx-1 fs-4  changebutton " to="/pool">
                Pool
              </Link>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <Link className="btn   mx-1 fs-4 changebutton " to="/stake">
                Farm
              </Link>
              <Link className="btn   mx-1 fs-4 changebutton " to="/stake">
                Launch
              </Link>
              <Link className="btn   mx-1 fs-4 changebutton " to="/stake">
                Lend
              </Link>
              <Link className="btn   mx-1 fs-4 changebutton " to="/stake">
                Stake
              </Link>
              <Link className="btn   mx-1 fs-4 changebutton " to="/stake">
                NFT
              </Link>
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              <div className="lend_nav_dropdown">
                <select
                  className="m-2 h-20 custom-btn-1 fs-5"
                  aria-label="dropdown"
                >
                  {Array.from(Array(3), (e, i) => {
                    if (i === 0) {
                      return <option>Avalanche</option>;
                    } else if (i === 1) {
                      return <option>Arbitrum One</option>;
                    }
                  })}
                </select>
              </div>
            </div>

            <div className="itemflex_lend">
              <div>
                <div
                  className="btn   m-2 fs-5 custom-btn-2 "
                  to="/connectwallet"
                  onClick={collectBtn}
                >
                  Connect wallet
                </div>

                {cartView
                  ? ((document.body.style.overflow = "hidden"),
                    console.log("card is opened"))
                  : ((document.body.style.overflow = ""),
                    console.log("card is closed"))}
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    {" "}
                    <Cart />{" "}
                  </Modal>
                ) : null}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
