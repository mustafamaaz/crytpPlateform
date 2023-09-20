import React from 'react';
import ReactDOM from 'react-dom';



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


const CLOSE_BUTTON_STYLES = {
  position: 'absolute',
  top: '3%',
  right: '6%',
  cursor: 'pointer',
  width:'25px',
  height:'auto',
  zIndex:'10'
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

  const isMobile = window.innerWidth <= 968; // Define your breakpoint for mobile
  const modalStyles = isMobile ? MOBILE_MODAL_STYLES : '';



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



        <div >
          {children}
        </div>


    


      </div>
    </>,
    document.getElementById('cart-root')

    
  );
}
