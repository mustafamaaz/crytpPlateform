import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  // Desktop styles
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'white',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '540px',
  width: '410px',
  borderRadius: '25px',
  overflow:'hidden'
};



const MOBILE_MODAL_STYLES = {
  // Mobile styles
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'white',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '80%', // Adjust the height for mobile
  width: '100%', // Adjust the width for mobile
  borderRadius: '25px', // Adjust the borderRadius for mobile
  marginTop:'41%',
  overflow:'hidden'
};


const MODAL_CONTENT_STYLES = {
  overflowY: 'auto', // Allow vertical scrolling for modal content
  height: '78%', // Make the content container take full height
};


const MODAL_CONTENT_STYLES_web = {
  overflowY: 'auto', 
  height: '90%',   // Make the content container take full height
};

const CLOSE_BUTTON_STYLES = {
  position: 'absolute',
  top: '3%',
  right: '6%',
  cursor: 'pointer',
  width:'25px',
  height:'auto',
  zIndex:'10'
};


const QuestionBtn = {
  position: 'absolute',
  top: '3%',
  right: '88%',
  cursor: 'pointer',
  width:'25px',
  height:'auto',
  zIndex:'10'
};


const BOTTOM_HADDER_mobile = {
  textAlign: 'center',
    color: 'black',
    position: 'fixed' ,
    backgroundColor: 'white',

    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '140px',
    fontSize:'13px',
    color:'gray',
    display:'flex',
    paddingTop:'10px'
};


const BOTTOM_HADDER_web = {
  textAlign: 'center',
    color: 'black',
    position: 'fixed' ,
    backgroundColor: 'white',
    paddingLeft:'10px',
    paddingRight:'10px',
    paddingTop:'5px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '50px',
    fontSize:'13px',
    color:'gray',
    outline:'2px solid #e8e8e8'
  };




const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
  overflow:'hidden',
  // overflowY:'none'
};

export default function Modal({ children, onClose,isOpen }) {

  const isMobile = window.innerWidth <= 768; // Define your breakpoint for mobile
  const modalStyles = isMobile ? MOBILE_MODAL_STYLES : MODAL_STYLES;

  const modaaLowerHadder = isMobile ? BOTTOM_HADDER_mobile : BOTTOM_HADDER_web;

  const contentdisplaydevices = isMobile ? MODAL_CONTENT_STYLES  : MODAL_CONTENT_STYLES_web;



  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={modalStyles}>
      <img
          className="close-button"
          style={CLOSE_BUTTON_STYLES}
          src="x.png" // Replace with the path to your close button image
          alt="Close" // Provide an alt text for accessibility
          onClick={onClose}
         
        />



<img
          className="close-button"
          style={QuestionBtn}
          src="q.png" // Replace with the path to your close button image
          alt="Close" // Provide an alt text for accessibility

        />


        <div style={contentdisplaydevices}>
          {children}
        </div>


        <div  className='cart-lower-hader'  style={modaaLowerHadder} >
  
  By connecting your wallet, you agree to the Terms of Service. </div>


      </div>
    </>,
    document.getElementById('cart-root')

    
  );
}
