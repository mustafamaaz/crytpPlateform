import React from "react";
import "./footer.css";

const Footer = () => {
  return (

    
    <footer className="small bg-light fs-5">
      <div  className="footercolor">
    

    <div className="footer-res" >
        

          
            <div className="foot-1"  >

            {/* style={{display:'flex' , position:'absolute' , left:'100px'}} */}

                <div >
                
                    <div className="heading" > Need Help? </div>
                    <br/>
                  
                  <ul className="list-unstyled">
                    <li>
                      <span>  Visit our {" "}  </span>
                     
                      <a href="https://support.traderjoexyz.com/en/">
                        support centre
                      </a>{" "}
                      <br/>
                      <span>  for troubleshooting  </span>
                      
                    </li>
                    <br/>
                    <li>
                    <span>  Join our{" "} </span>
                      
                      <a href="https://support.traderjoexyz.com/en/">
                        offical Discord
                      </a>{"  "}
                      <br/>
                      <span> for dedicated support </span>
                      
                    </li>

                    <br/>


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


                  <br/>  <br/>  <br/>

                </div>



                 {/* <ul >
                    <li className="list-inline-item">
                      &copy; 2022 Joemart Ltd
                    </li>
                    <li className="list-inline-item">All rights reserved.</li>
                    <li className="list-inline-item">
                      <a href="#">Terms of use and privacy policy</a>
                    </li>
                  </ul> */}
</div>




<div className="foot-2" >

{/* style={{display:'flex' , position:'absolute' , left:'700px'}} */}
   <div>
                  <div className="heading" > JOE Token </div>

                  <br/>
                  
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

                    <div className="heading" > Analysis </div>

                    <br/>
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
  </div>



  <div className="foot-3" >  
  {/* style={{display:'flex' , position:'absolute' , right:'800px'}} */}

                    <div>
                     <div className="heading" > Exchanges </div>

                     <br/>

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
  </div>



  <div className="foot-4" >
  {/* style={{display:'flex' , position:'absolute' , right:'300px'}} */}
                 <div  >
                  <address>
                    <div className="heading" >  Buisness </div>

                    <br/>
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



              </div>
              </div>          
              
   
    </footer>
  );
};

export default Footer;
