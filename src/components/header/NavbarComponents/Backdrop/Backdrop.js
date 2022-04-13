import React from 'react';
import './Backdrop.css'

function Backdrop({onBackdropClick1, onBackdropClick2}) {

  const handleBackdropVisible = () => {
    onBackdropClick1()
    onBackdropClick2()
  }

  return <div className="backdrop" onClick={handleBackdropVisible}></div>;
}

export default Backdrop;