import React from "react";
// import "./footer.css";
import "./footernew.css";
import { div } from "react-router-dom";

const Footer = () => {
  return (
<div>







<footer class="footer">
  	 <div class="container">
  	 	<div class="row">


  	 		<div class="footer-col">
  	 			<h4>Need Help?</h4>

  	 			<div className="footerinnerboxes"  >   
{/* ul */}
					<div className="footerineritemssyt"  >
						<span>  Visit our {" "}  </span>
					   
						<div href="https://support.traderjoexyz.com/en/">
						  support centre
						</div>{" "}
						<br/>
						<span>for troubleshooting</span>
						
					  </div>

					  <div className="footerineritemssyt" >
						<span>  Join our{" "} </span>
						  
						  <div href="https://support.traderjoexyz.com/en/">
							offical Discord
						  </div>{"  "}
						  <br/>
						  <span> for dedicated support </span>
						  
						</div>

						<div className="footerineritemssyt" >
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
						  </div>

  	 	 {/* <div ><div href="#">about us</div></div >
  	 				<div ><div href="#">our services</div></div >
  	 				<div ><div href="#">privacy policy</div></div >
  	 				<div ><div href="#">affiliate program</div></div >  */}
  	 		
        	</div>



  	 		</div>


  	 		<div class="footer-col">
  	 			<h4>JOE Token </h4>
  	 			<div className="footerinnerboxes">


					<div className="footerineritemssyt" >
						<div href="#">Coingecko</div>
					  </div>
					  <div className="footerineritemssyt" >
						<div href="#">CoinMarketCap</div>
					  </div>
					  <div className="footerineritemssyt" >
						<br></br>{" "}
					  </div>

					  <div className="footerineritemssyt" >
  
            <h4>Analysis</h4>
					  <br/>
					  </div>
					  <div className="footerineritemssyt" >
						<div href="#">TokenTerminal</div>
					  </div>
					  <div className="footerineritemssyt" >
						<div href="#">Defi Llama</div>
					  </div>
					  <div className="footerineritemssyt" >
						<div href="#">Gecko Terminal</div>
					  </div>



{/* 
  	 	 <div ><div href="#">FAQ</div></div >
  	 				<div ><div href="#">shipping</div></div >
  	 				<div ><div href="#">returns</div></div >
  	 				<div ><div href="#">order status</div></div >
  	 				<div ><div href="#">payment options</div></div >  */}


  	 			</div>


  	 		</div>


  	 		<div class="footer-col">
  	 			<h4>Exchanges</h4>
  	 			<div className="footerinnerboxes">


					<div className="footerineritemssyt"  >
						<div href="#">Binance</div>
					  </div >
					  <div className="footerineritemssyt" >
						<div href="#">Crypto.com</div>
					  </div >
					  <div className="footerineritemssyt" >
						<div href="#">Gate.io</div>
					  </div >
					  <div className="footerineritemssyt" >
						<div href="#">MEXC</div>
					  </div >
					  <div className="footerineritemssyt">
						<div href="#">OKX</div>
					  </div > 
  	 				{/* <div ><div href="#">watch</div></div >
  	 				<div ><div href="#">bag</div></div >
  	 				<div ><div href="#">shoes</div></div >
  	 				<div ><div href="#">dress</div></div >  */}
  	 			</div>
  	 		</div>


  	 		<div class="footer-col">
  	 			<h4> Buisness</h4>
				<div  className="footerinnerboxes">

					

						<div className="footerineritemssyt" >
							<div href="#">Apply for Patnership</div>
						  </div >
						  <div className="footerineritemssyt" >
							<div href="#">Token Listing</div>
						  </div >
						  <div className="footerineritemssyt">
							<div href="#">NFT Listing</div>
						  </div >
						  <div className="footerineritemssyt" >
							<div href="#">Contact Us</div>
						  </div >

				</div>

  	 {/* <div class="social-links">
  	 				<div href="#"><i class="fab fa-facebook-f"></i></div>
  	 				<div href="#"><i class="fab fa-twitter"></i></div>
  	 				<div href="#"><i class="fab fa-instagram"></i></div>
  	 				<div href="#"><i class="fab fa-linkedin-in"></i></div>
  	 			</div>  */}

  	 		</div>
  	 	</div>
  	 </div>
  </footer>


</div>

    
  );
};

export default Footer;
