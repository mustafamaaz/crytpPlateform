import React from "react";
// import "./footer.css";
import "./footernew.css";
import { div } from "react-router-dom";

const Footer = () => {
  return (
<div>




<footer className="footer">

        <div style={{display:'flex' , justifyContent:'center',fontSize:'20px', fontWeight:'bolder' , color:'black' }} >
		Need help? 
		</div>
      
      <div className="footer-content">
		<div style={{display:'flex' , flexDirection:'row'}} >
        <div className="help-text">
           Visit  <span className="information" >  our support centre </span> for troubleshooting
        </div>
		
        <div className="discord-text">
          Join <span className="information" > our official Discord </span> for dedicated support
        </div>
		</div>
        <div className="social-links">

		<div className="footerineritemssyt" >
							<div className="icon-row mx-3" style={{display:'flex' , flexDirection:'row' , flexWrap:'nowrap'}} >
							  <span className="icon small-icon   ">
								<img  className=" footer-img-icon-size-mob"
								  src="./discord.png"
								  alt=""
								 
								/>
							  </span>
							  <span className="icon small-icon ">
								<img  className=" footer-img-icon-size-mob"
								  src="./twt.png"
								  alt=""
								 
								/>
							  </span>
							  <span className="icon small-icon ">
								<img  className=" footer-img-icon-size-mob"
								  src="./bookmark.png"
								  alt=""
								
								/>
							  </span>
							  <span className="icon small-icon ">
								<img className=" footer-img-icon-size-mob"
								  src="./face.png"
								  alt=""
							
								/>
							  </span>
							  <span className="icon small-icon  ">
								<img  className=" footer-img-icon-size-mob"
								  src="./github-sign.png"
								  alt=""
								 
								/>
							  </span>
							</div>
						  </div>


        </div>
        <div className="footer-links">
          <span className="information" href="/">Security</span>
          <span className="information" href="/">Developers</span>
          <span className="information" href="/">Privacy</span>
          <span className="information" href="/">Terms of Service</span>
        </div>
      </div>
      <div className="copyright">
        © 2022 Joemart Ltd
      </div>
    </footer>






</div>

    
  );
};

export default Footer;
