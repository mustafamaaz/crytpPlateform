import React from "react";
// import "./footer.css";
import "./footernew.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<div>







<footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Need Help?</h4>
  	 			<ul>

					<li>
						<span>  Visit our {" "}  </span>
					   
						<Link href="https://support.traderjoexyz.com/en/">
						  support centre
						</Link>{" "}
						<br/>
						<span>for troubleshooting</span>
						
					  </li>

					  <li>
						<span>  Join our{" "} </span>
						  
						  <Link href="https://support.traderjoexyz.com/en/">
							offical Discord
						  </Link>{"  "}
						  <br/>
						  <span> for dedicated support </span>
						  
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

  	 	 {/* <li><Link href="#">about us</Link></li>
  	 				<li><Link href="#">our services</Link></li>
  	 				<li><Link href="#">privacy policy</Link></li>
  	 				<li><Link href="#">affiliate program</Link></li>  */}
  	 		
        	</ul>

  	 		</div>


  	 		<div class="footer-col">
  	 			<h4>JOE Token </h4>
  	 			<ul>


					<li>
						<Link href="#">Coingecko</Link>
					  </li>
					  <li>
						<Link href="#">CoinMarketCap</Link>
					  </li>
					  <li>
						<br></br>{" "}
					  </li>
					  <li>
  
					  
            <h4>Analysis</h4>
					  <br/>
					  </li>
					  <li>
						<Link href="#">TokenTerminal</Link>
					  </li>
					  <li>
						<Link href="#">Defi Llama</Link>
					  </li>
					  <li>
						<Link href="#">Gecko Terminal</Link>
					  </li>



{/* 
  	 	 <li><Link href="#">FAQ</Link></li>
  	 				<li><Link href="#">shipping</Link></li>
  	 				<li><Link href="#">returns</Link></li>
  	 				<li><Link href="#">order status</Link></li>
  	 				<li><Link href="#">payment options</Link></li>  */}


  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Exchanges</h4>
  	 			<ul>


					<li>
						<Link href="#">Binance</Link>
					  </li>
					  <li>
						<Link href="#">Crypto.com</Link>
					  </li>
					  <li>
						<Link href="#">Gate.io</Link>
					  </li>
					  <li>
						<Link href="#">MEXC</Link>
					  </li>
					  <li>
						<Link href="#">OKX</Link>
					  </li> 
  	 				{/* <li><Link href="#">watch</Link></li>
  	 				<li><Link href="#">bag</Link></li>
  	 				<li><Link href="#">shoes</Link></li>
  	 				<li><Link href="#">dress</Link></li>  */}
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4> Buisness</h4>
				<ul>

					

						<li>
							<Link href="#">Apply for Patnership</Link>
						  </li>
						  <li>
							<Link href="#">Token Listing</Link>
						  </li>
						  <li>
							<Link href="#">NFT Listing</Link>
						  </li>
						  <li>
							<Link href="#">Contact Us</Link>
						  </li>

				</ul>

  	 {/* <div class="social-links">
  	 				<Link href="#"><i class="fab fa-facebook-f"></i></Link>
  	 				<Link href="#"><i class="fab fa-twitter"></i></Link>
  	 				<Link href="#"><i class="fab fa-instagram"></i></Link>
  	 				<Link href="#"><i class="fab fa-linkedin-in"></i></Link>
  	 			</div>  */}

  	 		</div>
  	 	</div>
  	 </div>
  </footer>


</div>

    
  );
};

export default Footer;
