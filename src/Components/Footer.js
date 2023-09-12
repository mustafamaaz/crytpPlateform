import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="small bg-light">
      <hr></hr>
    <div className=" container footer"  >
     
    
        <div className="fs-4 "   style={{position:'static' , display:'flex' }}>

          
            <div className=" py-3 py-sm-5">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3" >
                  <h6>
                    <b>Need Help?</b>
                  </h6>
                  <ul className="list-unstyled">
                    <li>
                      Visit our{" "}
                      <a href="https://support.traderjoexyz.com/en/">
                        support centre
                      </a>{" "}
                      for troubleshooting
                    </li>
                    <li>
                      Join our{" "}
                      <a href="https://support.traderjoexyz.com/en/">
                        offical Discord
                      </a>{" "}
                      for dedicated support
                    </li>
                    <li>
                      <div className="icon-row mx-3">
                        <span className="icon small-icon">
                          <img
                            src="./discord.png"
                            alt=""
                            style={{ width: "40px", height: "40px" }}
                          />
                        </span>
                        <span className="icon small-icon">
                          <img
                            src="./twt.png"
                            alt=""
                            style={{ width: "40px", height: "40px" }}
                          />
                        </span>
                        <span className="icon small-icon">
                          <img
                            src="./bookmark.png"
                            alt=""
                            style={{ width: "40px", height: "40px" }}
                          />
                        </span>
                        <span className="icon small-icon">
                          <img
                            src="./ss.png"
                            alt=""
                            style={{ width: "40px", height: "40px" }}
                          />
                        </span>
                        <span className="icon small-icon">
                          <img
                            src="./github-sign.png"
                            alt=""
                            style={{ width: "37px", height: "37px" }}
                          />
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>




                <div className="col-12 col-sm-6 col-md-3"   >
                  <h6>
                    <b>JOE Token</b>
                  </h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Coingecko</a>
                    </li>
                    <li>
                      <a href="#">CoinMarketCap</a>
                    </li>
                    <li>
                      <br></br>{" "}
                    </li>
                    <li>
                      <h8>
                        <b>Analytics</b>
                      </h8>
                    </li>
                    <li>
                      <a href="#">TokenTerminal</a>
                    </li>
                    <li>
                      <a href="#">Defi Llama</a>
                    </li>
                    <li>
                      <a href="#">Gecko Terminal</a>
                    </li>
                  </ul>
                </div>



                <div className="col-12 col-sm-6 col-md-3"  >
                  <h6>
                    <b>Exchanges</b>
                  </h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Binance</a>
                    </li>
                    <li>
                      <a href="#">Crypto.com</a>
                    </li>
                    <li>
                      <a href="#">Gate.io</a>
                    </li>
                    <li>
                      <a href="#">MEXC</a>
                    </li>
                    <li>
                      <a href="#">OKX</a>
                    </li>
                  </ul>
                </div>


                <div className="col-12 col-sm-6 col-md-3  "  >
                  <address>
                    <strong>Buisness</strong>
                    <br />
                    <a href="#">Apply for Patnership</a>
                    <br />
                    <a href="#">Token Listing</a>
                    <br />
                    <a href="#">NFT Listing</a>
                    <br />
                    <a href="#">Contact Us</a>
                  </address>
                </div>


              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-9">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      &copy; 2022 Joemart Ltd
                    </li>
                    <li className="list-inline-item">All rights reserved.</li>
                    <li className="list-inline-item">
                      <a href="#">Terms of use and privacy policy</a>
                    </li>
                  </ul>
                </div>
              


              </div>
            </div>
          
        </div>
     
    </div>
    </footer>
  );
};

export default Footer;
